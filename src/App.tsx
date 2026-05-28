import React, { useState } from 'react';
import { 
  Search, ChevronDown, 
  Bot, Globe, 
  Home, Hourglass, Users,
  GraduationCap, Building2, Book, Trophy, 
  UserPlus, Server, Network, Laptop, Settings, Database, Link
} from 'lucide-react';

function Header({ role, setRole }: { role: 'teacher' | 'student', setRole: (v: 'teacher' | 'student') => void }) {
  return (
    <header className="h-[60px] bg-white flex items-center justify-between px-6 border-b border-gray-100 shrink-0 shadow-sm z-10 relative">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 mr-10 cursor-pointer">
          <div className="flex flex-col items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb7185" />
                  <stop offset="25%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#1e3a8a" />
                  <stop offset="75%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <path d="M 6 22 L 15 6 L 15 26 L 24 10" stroke="url(#logo-grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-extrabold text-[10px] italic tracking-wider mt-0.5 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-cyan-500">UUSIMA</span>
          </div>
          <span className="font-bold text-[#1e295a] text-[19px] tracking-wide ml-1">智慧教学实验平台</span>
        </div>
        
        {/* Nav Links */}
        <nav className="flex items-center gap-8">
           {['课程大厅', '实验大厅', '考试大厅', '最佳实践', '产品中心', '关于UUSIMA'].map(item => (
             <a key={item} href="#" className="text-gray-500 hover:text-gray-800 text-[14px]">
               {item}
             </a>
           ))}
           <div className="text-gray-400 cursor-pointer hover:text-gray-600 flex items-center gap-1">••• <ChevronDown className="w-3 h-3" /></div>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher */}
        <div className="flex bg-gray-100 rounded-lg p-0.5 mr-2">
           <button onClick={() => setRole('student')} className={`px-3 py-1 text-[12px] rounded-md transition-all ${role === 'student' ? 'bg-white shadow text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>学生端</button>
           <button onClick={() => setRole('teacher')} className={`px-3 py-1 text-[12px] rounded-md transition-all ${role === 'teacher' ? 'bg-white shadow text-blue-600 font-medium' : 'text-gray-500 hover:text-gray-700'}`}>教师端</button>
        </div>

        <a href="#" className="text-blue-600 text-[14px] font-medium tracking-wide">我的主页</a>
        <div className="flex items-center gap-1 text-[14px] text-gray-700 cursor-pointer hover:text-gray-900 ml-2">
          {role === 'teacher' ? '杨老师' : '杨振邦'} <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  const items = [
    { icon: Home, label: '首页', active: true, color: 'text-blue-500' },
    { icon: Hourglass, label: '我的考试', active: false, color: 'text-green-500' },
    { icon: Users, label: '我的学习', active: false, color: 'text-orange-400' },
  ];

  return (
    <aside className="w-[180px] bg-white h-full shrink-0 flex flex-col py-3 border-r border-gray-100 z-10 shadow-[2px_0_8px_rgba(0,0,0,0.02)]">
       {items.map(item => (
         <div 
           key={item.label} 
           className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors ${
             item.active 
               ? 'bg-[#edf5ff] border-l-4 border-blue-600' 
               : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
           }`}
         >
            <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-600' : item.color}`} />
            <span className={`text-[14px] ${item.active ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>{item.label}</span>
         </div>
       ))}
    </aside>
  )
}

function WelcomeBanner({ role }: { role: 'teacher' | 'student' }) {
  const name = role === 'teacher' ? '杨老师' : '杨振邦 同学';
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm relative overflow-hidden h-[120px]">
       <div className="flex items-center gap-16 z-10">
          <div className="text-[17px] text-gray-700 whitespace-nowrap">
             Hi, <span className="font-bold text-gray-900 text-[19px] ml-1 mr-1">{name}</span> 下午好 欢迎回来~
          </div>
          <div className="flex gap-12">
             <InfoItem icon={GraduationCap} color="bg-indigo-100 text-indigo-500" label="班级" value="新大陆教育行业云" />
             <InfoItem icon={Building2} color="bg-orange-100 text-orange-500" label="学院" value="新大陆教育行业云" />
             <InfoItem icon={Book} color="bg-cyan-100 text-cyan-500" label="专业" value="--" />
          </div>
       </div>
       
       <div className="absolute right-0 top-0 bottom-0 pointer-events-none flex items-center justify-end">
         <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="translate-x-[20px]">
            <path d="M180 20 L195 40 L210 20 Z" fill="#eff6ff" />
            <path d="M215 15 L220 22 L225 10 Z" fill="#bfdbfe" />
            <rect x="150" y="40" width="70" height="90" rx="8" transform="rotate(15 150 40)" fill="#e2e8f0" />
            <rect x="135" y="35" width="75" height="95" rx="12" fill="#3b82f6" />
            <rect x="142" y="42" width="61" height="81" rx="6" fill="#ffffff" />
            
            <rect x="152" y="55" width="16" height="16" rx="4" fill="#dbeafe" />
            <path d="M156 63 L159 66 L164 59" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <rect x="175" y="58" width="20" height="3" rx="1" fill="#cbd5e1" />
            <rect x="175" y="66" width="10" height="3" rx="1" fill="#cbd5e1" />
            
            <circle cx="120" cy="70" r="18" fill="#60a5fa" />
            <circle cx="120" cy="70" r="14" fill="#eff6ff" />
            <path d="M120 62 L120 73 M120 77 L120 79" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />

            <path d="M190 25 L195 30 L200 20 Z" fill="#93c5fd" />
            <circle cx="210" cy="40" r="2" fill="#60a5fa" />
            <circle cx="140" cy="25" r="3" fill="#bfdbfe" />
         </svg>
       </div>
    </div>
  )
}

function InfoItem({ icon: Icon, color, label, value }: any) {
  return (
    <div className="flex items-center gap-3">
       <div className={`w-9 h-9 rounded-full flex items-center justify-center ${color}`}>
          <Icon className="w-4 h-4" />
       </div>
       <div className="flex flex-col">
          <span className="text-[12px] text-gray-500 mb-0.5">{label}</span>
          <span className="text-[14px] font-medium text-gray-800">{value}</span>
       </div>
    </div>
  )
}

const StatIcon = ({ type }: { type: number }) => {
  return (
     <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="scale-[0.8] origin-right">
       {type === 1 && (
         <>
           <polygon points="10,40 40,40 50,15 20,15" fill="#3b82f6" />
           <polygon points="15,45 45,45 55,20 25,20" fill="#60a5fa" />
           <circle cx="28" cy="12" r="6" fill="#67e8f9" />
         </>
       )}
       {type === 2 && (
         <>
           <polygon points="10,40 40,40 50,15 20,15" fill="#3b82f6" />
           <polygon points="15,45 45,45 55,20 25,20" fill="#60a5fa" />
           <circle cx="28" cy="12" r="6" fill="#67e8f9" />
         </>
       )}
       {type === 3 && (
         <>
           <polygon points="10,40 40,40 50,15 20,15" fill="#2563eb" />
           <polygon points="15,45 45,45 55,20 25,20" fill="#3b82f6" />
           <circle cx="45" cy="40" r="10" fill="#22d3ee" />
           <circle cx="45" cy="40" r="7" fill="#ffffff" />
           <polyline points="45,37 45,40 48,40" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
         </>
       )}
       {type === 4 && (
         <>
           <polygon points="10,40 40,40 50,15 20,15" fill="#2563eb" />
           <polygon points="15,45 45,45 55,20 25,20" fill="#3b82f6" />
           <circle cx="45" cy="40" r="10" fill="#22d3ee" />
           <circle cx="45" cy="40" r="7" fill="#ffffff" />
           <path d="M45 42 L47 38 M45 38 L45 42" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" />
         </>
       )}
       {type === 5 && (
         <>
           <rect x="25" y="15" width="25" height="35" rx="2" fill="#60a5fa" transform="rotate(15 37 32)" />
           <rect x="15" y="20" width="25" height="35" rx="2" fill="#2563eb" />
           <rect x="20" y="28" width="10" height="2" fill="#93c5fd" />
           <rect x="20" y="34" width="15" height="2" fill="#93c5fd" />
         </>
       )}
     </svg>
  )
}

function StatCards() {
  const stats = [
    { label: '待办任务', value: '0', unit: '个', type: 1 },
    { label: '已完成任务', value: '0', unit: '个', type: 2 },
    { label: '已用时长', value: '0', unit: '分钟', type: 3 },
    { label: '剩余时长', value: '0', unit: '分钟', type: 4 },
    { label: '实验报告数', value: '0', unit: '份', type: 5 },
  ]
  return (
    <div className="grid grid-cols-5 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow relative overflow-hidden h-[90px]">
          <div className="flex flex-col space-y-1 z-10">
             <span className="text-[13px] text-gray-500">{s.label}</span>
             <div className="text-xl font-bold text-gray-800 flex items-baseline gap-1">
               {s.value} <span className="text-[12px] font-normal text-gray-500">{s.unit}</span>
             </div>
          </div>
          <div className="absolute right-2 top-0 bottom-0 flex items-center z-0">
             <StatIcon type={s.type} />
          </div>
        </div>
      ))}
    </div>
  )
}

function TeacherView() {
  const leaderboard = [
    { rank: 1, name: '李华', id: '20210101', class: '计算机网络 1班', score: 98, time: '20分钟' },
    { rank: 2, name: '王明', id: '20210102', class: '计算机网络 1班', score: 95, time: '22分钟' },
    { rank: 3, name: '张伟', id: '20210103', class: '通信工程 2班', score: 92, time: '25分钟' },
    { rank: 4, name: '刘洋', id: '20210104', class: '计算机网络 2班', score: 88, time: '28分钟' },
    { rank: 5, name: '陈杰', id: '20210105', class: '通信工程 1班', score: 85, time: '30分钟' },
  ];

  return (
    <div className="grid grid-cols-12 gap-5 flex-1 min-h-[400px]">
       <div className="col-span-12 bg-white rounded-lg p-5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-4">
             <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h3 className="font-bold text-gray-800 text-[16px]">竞赛评分排行榜</h3>
             </div>
             <div className="flex gap-2">
                <div className="relative">
                   <Search className="w-[14px] h-[14px] text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                   <input 
                     type="text" 
                     placeholder="搜索学生姓名/学号查询得分" 
                     className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-[4px] text-[13px] w-[240px] focus:outline-none focus:border-blue-400 placeholder:text-gray-400"
                   />
                </div>
                <button className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[13px] font-medium rounded-[4px] hover:bg-blue-100 transition-colors">
                   导出成绩
                </button>
             </div>
          </div>
          
          <div className="mt-2 text-[14px] overflow-auto">
             <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                   <tr className="bg-gray-50 text-gray-500 font-medium">
                      <th className="py-3 px-4 w-[100px] rounded-l-md">名次排行</th>
                      <th className="py-3 px-4">学生学号</th>
                      <th className="py-3 px-4">学生姓名</th>
                      <th className="py-3 px-4">所在班级</th>
                      <th className="py-3 px-4">完成用时</th>
                      <th className="py-3 px-4 text-right rounded-r-md">竞赛得分</th>
                   </tr>
                </thead>
                <tbody>
                   {leaderboard.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-[#fafafa] transition-colors group">
                         <td className="py-3 px-5">
                            {row.rank <= 3 ? (
                               <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold shadow-sm
                                  ${row.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : row.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-400' : 'bg-gradient-to-r from-orange-300 to-orange-400'}`}>
                                  {row.rank}
                               </div>
                            ) : (
                               <span className="text-gray-500 font-medium ml-2">{row.rank}</span>
                            )}
                         </td>
                         <td className="py-3 px-4 text-gray-500 font-mono">{row.id}</td>
                         <td className="py-3 px-4 font-medium text-gray-800">{row.name}</td>
                         <td className="py-3 px-4 text-gray-500">{row.class}</td>
                         <td className="py-3 px-4 text-gray-500">{row.time}</td>
                         <td className="py-3 px-4 text-right">
                            <span className="font-bold text-blue-600 text-[18px] group-hover:scale-110 inline-block transition-transform">{row.score}</span> <span className="text-gray-400 text-[12px]">分</span>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  )
}

function StudentView() {
  const [activeMode, setActiveMode] = useState('考核模式');
  const modes = ['考核模式', '教学模式', '竞赛模式'];
  const subsystems = [
    { name: '工作区子系统', icon: Laptop, color: 'text-blue-500', bg: 'bg-blue-50', desc: '末端终端设备连接区' },
    { name: '配线（水平）子系统', icon: Network, color: 'text-indigo-500', bg: 'bg-indigo-50', desc: '楼层内部线缆铺设' },
    { name: '管理子系统', icon: Settings, color: 'text-purple-500', bg: 'bg-purple-50', desc: '配线架与机柜管理' },
    { name: '干线（垂直）子系统', icon: Server, color: 'text-teal-500', bg: 'bg-teal-50', desc: '楼层间主干线缆布防' },
    { name: '设备间子系统', icon: Database, color: 'text-rose-500', bg: 'bg-rose-50', desc: '核心设备集中区域' },
    { name: '建筑群子系统', icon: Building2, color: 'text-orange-500', bg: 'bg-orange-50', desc: '建筑间光缆连接' },
    { name: '进线间子系统', icon: Link, color: 'text-cyan-500', bg: 'bg-cyan-50', desc: '外部网络接入入口' },
  ];

  return (
     <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col flex-1 min-h-[400px]">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
           <h3 className="font-bold text-gray-800 text-[16px]">系统学习模式</h3>
           <div className="flex gap-2 p-1 bg-gray-50 rounded-full border border-gray-100">
             {modes.map(mode => (
                <button 
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-6 py-1.5 rounded-full text-[13px] transition-all duration-300 ${
                    activeMode === mode 
                    ? 'bg-blue-600 text-white font-medium shadow-sm' 
                    : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {mode}
                </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
           {subsystems.map(sub => (
              <div key={sub.name} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer group flex flex-col items-center justify-center text-center bg-white relative overflow-hidden">
                 <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${sub.bg} ${sub.color} group-hover:scale-110 transition-transform duration-300`}>
                    <sub.icon className="w-7 h-7" />
                 </div>
                 <span className="text-[15px] font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{sub.name}</span>
                 <span className="text-[12px] text-gray-400 mt-2 line-clamp-1">{sub.desc}</span>
                 
                 <div className="absolute inset-0 bg-blue-600/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
                   <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[13px] font-medium shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">进入{activeMode}</span>
                 </div>
              </div>
           ))}
        </div>
     </div>
  )
}

export default function App() {
  const [role, setRole] = useState<'teacher' | 'student'>('student');

  return (
    <div className="h-screen w-full flex flex-col font-sans bg-[#f4f5f7]">
      <Header role={role} setRole={setRole} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-5 space-y-4">
           <WelcomeBanner role={role} />
           <StatCards />
           
           {role === 'teacher' ? <TeacherView /> : <StudentView />}
        </main>
      </div>
    </div>
  );
}
