import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Target, Download, LogOut, ArrowRight, Table } from 'lucide-react';
import Navbar from '../sections/NavBar';

// REPLACE WITH YOUR APPS SCRIPT URL AFTER DEPLOYING
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzzrpJDWew27GhXOrr7Be99UHp64LGxrPAHUTvNlpjsLDuMFqZ1DeLwYo4IiuvQj9TJUA/exec";

type ViewState = 'login' | 'dashboard' | 'adminLogin' | 'adminDashboard';

interface InternUser { email: string; name: string; }
interface LogEntry { timestamp: string; hours: number; description: string; week: number | string; email?: string; name?: string; }
interface LeaderboardEntry { name: string; totalHours: number; }
interface InternData { logs: LogEntry[]; totalHours: number; weekNumber: number; targetHours: number; hourlyRate: number; }
interface AdminStats { totalEntries: number; totalHours: number; totalEarnings: number; targetHours: number; hourlyRate: number; }
interface InternRecord { email: string; name: string; startDate: string; status: string; }
interface AdminData { allLogs: LogEntry[]; interns: InternRecord[]; stats: AdminStats; }

export default function InternPortal() {
  const [view, setView] = useState<ViewState>('login');
  const [initializing, setInitializing] = useState(true); // true while restoring session on load
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<InternUser | null>(null);
  
  // Dashboard state
  const [internData, setInternData] = useState<InternData | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  
  // Admin state
  const [adminData, setAdminData] = useState<AdminData | null>(null);

  // Forms
  const [email, setEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');

  // Check session on load — show spinner until resolved
  useEffect(() => {
    const sessionEmail = sessionStorage.getItem('internEmail');
    const sessionName = sessionStorage.getItem('internName');
    const sessionAdminToken = sessionStorage.getItem('adminToken');

    if (sessionAdminToken) {
      fetchAdminData(sessionAdminToken).finally(() => setInitializing(false));
    } else if (sessionEmail && sessionName) {
      setCurrentUser({ email: sessionEmail, name: sessionName });
      fetchDashboardData(sessionEmail).finally(() => setInitializing(false));
    } else {
      setInitializing(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${SCRIPT_URL}?action=validateIntern&email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (data.valid) {
        setCurrentUser({ email: data.email, name: data.name });
        sessionStorage.setItem('internEmail', data.email);
        sessionStorage.setItem('internName', data.name);
        fetchDashboardData(data.email);
      } else {
        setError(data.error || 'Invalid or inactive intern email.');
      }
    } catch {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${SCRIPT_URL}?action=validateAdmin&password=${encodeURIComponent(adminPass)}`);
      const data = await res.json();

      if (data.valid) {
        sessionStorage.setItem('adminToken', data.token);
        fetchAdminData(data.token);
      } else {
        setError('Invalid admin password.');
      }
    } catch {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const fetchDashboardData = async (userEmail: string) => {
    setLoading(true);
    try {
      const [userDataRes, leaderboardRes] = await Promise.all([
        fetch(`${SCRIPT_URL}?action=getInternData&email=${encodeURIComponent(userEmail)}`),
        fetch(`${SCRIPT_URL}?action=getLeaderboard`)
      ]);
      const userData = await userDataRes.json();
      const leaderboardData = await leaderboardRes.json();
      setInternData(userData);
      setLeaderboard(leaderboardData.interns || []);
      setView('dashboard');
    } catch {
      setError('Failed to load dashboard data.');
    }
    setLoading(false);
  };

  const fetchAdminData = async (token: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${SCRIPT_URL}?action=getAdminData&token=${encodeURIComponent(token)}`);
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
        sessionStorage.removeItem('adminToken');
        setView('adminLogin');
      } else {
        setAdminData(data);
        setView('adminDashboard');
      }
    } catch {
      setError('Failed to load admin data.');
    }
    setLoading(false);
  };

  const handleLogHours = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !hours || !description) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `${SCRIPT_URL}?action=logHours&email=${encodeURIComponent(currentUser.email)}&hours=${encodeURIComponent(hours)}&description=${encodeURIComponent(description)}`
      );
      const data = await res.json();
      
      if (data.success) {
        setHours('');
        setDescription('');
        // Refresh dashboard
        fetchDashboardData(currentUser.email);
      } else {
        setError(data.error || 'Failed to log hours.');
      }
    } catch {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('internEmail');
    sessionStorage.removeItem('internName');
    sessionStorage.removeItem('adminToken');
    setCurrentUser(null);
    setEmail('');
    setAdminPass('');
    setView('login');
  };

  const exportCSV = () => {
    if (!adminData || !adminData.allLogs) return;
    
    const headers = ['Timestamp', 'Email', 'Name', 'Week', 'Hours', 'Description'];
    const rows = adminData.allLogs.map((log: LogEntry) => [
      log.timestamp,
      log.email ?? '',
      log.name ?? '',
      log.week,
      log.hours,
      `"${String(log.description).replace(/"/g, '""')}"` // Escape quotes
    ]);
    
    const csvContent = [headers.join(','), ...rows.map((r: (string | number)[]) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `intern_logs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- RENDERING VIEWS ---

  const renderLogin = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
      className="max-w-md w-full mx-auto bg-white p-8 rounded-[20px] shadow-sm border border-gray-100"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Intern Portal</h2>
        <p className="text-gray-500">Log in to track your hours</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-gray-50 border text-black border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B9F6E] focus:border-transparent outline-none transition"
            placeholder="intern@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-[#1B75E8] to-[#0B9F6E] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-70 flex justify-center items-center gap-2"
        >
          {loading ? 'Verifying...' : 'Login Securely'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
      
      <div className="mt-8 text-center">
         <button onClick={() => setView('adminLogin')} className="text-xs text-gray-400 hover:text-gray-600 underline">
            Admin Access
         </button>
      </div>
    </motion.div>
  );

  const renderAdminLogin = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
      className="max-w-md w-full mx-auto bg-gray-900 p-8 rounded-[20px] shadow-xl text-white outline outline-4 outline-offset-4 outline-gray-200"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Admin Access</h2>
        <p className="text-gray-400 text-sm">Please enter the secure admin password</p>
      </div>

      <form onSubmit={handleAdminLogin} className="space-y-4">
        <div>
          <input
            type="password"
            required
            className="w-full px-4 py-3  bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-[#0B9F6E] outline-none transition text-white"
            placeholder="••••••••"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
          />
        </div>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}
        
        <div className="flex gap-3">
            <button
                type="button"
                onClick={() => setView('login')}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all"
            >
                Back
            </button>
            <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-[#0B9F6E] text-white rounded-xl font-semibold hover:bg-green-600 transition-all disabled:opacity-70"
            >
                {loading ? '...' : 'Access'}
            </button>
        </div>
      </form>
    </motion.div>
  );

  const renderDashboard = () => {
    if (!internData) return <div className="text-center py-20 text-gray-500">Loading your data...</div>;

    const progressPercentage = Math.min(100, Math.round((internData.totalHours / internData.targetHours) * 100));

    return (
      <div className="max-w-6xl w-full mx-auto animate-in fade-in duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome, {currentUser?.name}</h1>
                <p className="text-gray-500 mt-1">Doubleyou Internship Tracker</p>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 font-medium bg-red-50 px-4 py-2 rounded-lg transition">
                <LogOut className="w-4 h-4"/> Logout
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Log Hours Form */}
            <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-5 h-5 text-[#1B75E8]"/>
                    <h2 className="text-xl font-bold text-gray-900">Log Hours</h2>
                </div>
                <form onSubmit={handleLogHours} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hours Worked</label>
                        <input
                            type="number" step="0.5" min="0.5" max="24" required
                            className="w-full px-4 py-3 bg-gray-50 text-black border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B9F6E] outline-none transition"
                            placeholder="e.g. 2.5"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                        />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">What did you work on?</label>
                         <textarea
                            required rows={3}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B9F6E] text-black outline-none transition resize-none"
                            placeholder="Describe your tasks..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                         />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit" disabled={loading}
                        className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all disabled:opacity-70"
                    >
                        {loading ? 'Submitting...' : 'Submit Log'}
                    </button>
                </form>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
                {/* Progress Overview */}
                <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex gap-6 items-center">
                     <div className="flex-1">
                         <div className="flex justify-between text-sm mb-2 font-medium">
                            <span className="text-gray-500">Programme Progress</span>
                            <span className="text-[#0B9F6E]">{internData.totalHours} / {internData.targetHours}h</span>
                         </div>
                         <div className="w-full bg-gray-100 rounded-full h-3 mb-4 overflow-hidden">
                             <div className="bg-[#0B9F6E] h-3 rounded-full transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
                         </div>
                         <div className="flex gap-8">
                             <div>
                                 <p className="text-xs text-gray-400">Est. Earnings</p>
                                 <p className="text-xl font-bold text-gray-900">${(internData.totalHours * internData.hourlyRate).toFixed(2)}</p>
                             </div>
                             <div>
                                 <p className="text-xs text-gray-400">Current Week</p>
                                 <p className="text-xl font-bold text-gray-900">Week {internData.weekNumber}</p>
                             </div>
                         </div>
                     </div>
                     <div className="hidden sm:flex w-24 h-24 rounded-full bg-green-50 items-center justify-center border-4 border-green-100">
                         <Target className="w-8 h-8 text-[#0B9F6E]"/>
                     </div>
                </div>

                {/* My Logs History */}
                <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex-1 overflow-hidden flex flex-col">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Logs</h2>
                    <div className="overflow-y-auto flex-1 pr-2 max-h-[300px]">
                        {internData.logs?.length === 0 ? (
                            <p className="text-gray-500 text-sm">No hours logged yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {internData.logs?.map((log: LogEntry, i: number) => (
                                    <div key={i} className="flex gap-4 p-3 bg-gray-50 rounded-lg text-sm border border-gray-100">
                                        <div className="min-w-[60px] font-semibold text-gray-900">{log.hours}h</div>
                                        <div className="flex-1 text-gray-600">{log.description}</div>
                                        <div className="text-xs text-gray-400 whitespace-nowrap">{new Date(log.timestamp).toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100  mb-20">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Live Leaderboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leaderboard.map((intern, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                         <div className="text-2xl font-black text-gray-300 w-8">{i + 1}</div>
                         <div className="flex-1">
                             <p className="font-bold text-gray-900">{intern.name}</p>
                             <div className="flex gap-2 items-center mt-1">
                                 <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden max-w-[150px]">
                                     <div className="bg-[#1B75E8] h-1.5 rounded-full" style={{ width: `${Math.min(100, (intern.totalHours / internData.targetHours)*100)}%`}}></div>
                                 </div>
                                 <p className="text-xs text-gray-500">{intern.totalHours}h / {internData.targetHours}h</p>
                             </div>
                         </div>
                         <div className="text-right">
                             <p className="text-sm font-bold text-[#0B9F6E]">${(intern.totalHours * internData.hourlyRate).toFixed(2)}</p>
                         </div>
                     </div>
                ))}
            </div>
        </div>
      </div>
    );
  };

  const renderAdminDashboard = () => {
    if (!adminData) return <div className="text-center py-20 text-gray-500">Loading admin data...</div>;

    return (
      <div className="max-w-7xl w-full mx-auto animate-in fade-in duration-500 pb-20">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500 mt-1">Viewing all intern logs & data</p>
            </div>
            <div className="flex gap-3">
                 <button onClick={exportCSV} className="flex items-center gap-2 text-sm text-gray-700 font-medium bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm">
                    <Download className="w-4 h-4"/> Export CSV
                </button>
                <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-white font-medium bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 transition shadow-sm">
                    <LogOut className="w-4 h-4"/> Admin Logout
                </button>
            </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                 <p className="text-sm text-gray-500 mb-1">Total Logs</p>
                 <p className="text-3xl font-bold text-gray-900">{adminData.stats.totalEntries}</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                 <p className="text-sm text-gray-500 mb-1">Total Hours</p>
                 <p className="text-3xl font-bold text-[#1B75E8]">{adminData.stats.totalHours.toFixed(1)}h</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                 <p className="text-sm text-gray-500 mb-1">Est. Payout</p>
                 <p className="text-3xl font-bold text-[#0B9F6E]">${adminData.stats.totalEarnings.toFixed(2)}</p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                 <p className="text-sm text-gray-500 mb-1">Active Interns</p>
                 <p className="text-3xl font-bold text-gray-900">{adminData.interns.filter((i: InternRecord) => i.status === 'active').length}</p>
             </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                 <h2 className="font-bold text-gray-900 flex items-center gap-2"><Table className="w-4 h-4 text-gray-400"/> Detailed Logs</h2>
             </div>
             <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                     <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                         <tr>
                             <th className="px-6 py-3 font-semibold">Date</th>
                             <th className="px-6 py-3 font-semibold">Intern</th>
                             <th className="px-6 py-3 font-semibold">Week</th>
                             <th className="px-6 py-3 font-semibold">Hours</th>
                             <th className="px-6 py-3 font-semibold">Task Description</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                         {adminData.allLogs.map((log: LogEntry, i: number) => (
                             <tr key={i} className="hover:bg-gray-50/50">
                                 <td className="px-6 py-3 whitespace-nowrap text-gray-500">{new Date(log.timestamp).toLocaleDateString()}</td>
                                 <td className="px-6 py-3 font-medium text-gray-900">{log.name}</td>
                                 <td className="px-6 py-3 text-gray-500">Wk {log.week}</td>
                                 <td className="px-6 py-3 font-semibold text-[#1B75E8]">{log.hours}h</td>
                                 <td className="px-6 py-3 text-gray-600 max-w-md truncate">{log.description}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>
      </div>
    );
  };

  if (initializing) {
    return (
      <div className="min-h-screen bg-[#FBF9FF] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#0B9F6E] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-400">Restoring your session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9FF] flex flex-col">
      <Navbar />
      
      <div className="flex-1 w-full flex items-center justify-center p-4 pt-12">
        {view === 'login' && renderLogin()}
        {view === 'adminLogin' && renderAdminLogin()}
        {view === 'dashboard' && renderDashboard()}
        {view === 'adminDashboard' && renderAdminDashboard()}
      </div>
    </div>
  );
}
