import React, { useState } from 'react';
import './App.css';

export default function ResumeShowcase() {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      title: "AI产品运营",
      company: "字节跳动 / 小红书",
      date: "2024.06 - 至今",
      summary: "AI商业化研究与AIGC行业深度调研，系统梳理AI技术B端落地应用场景",
      jd: `工作职责：
• AI商业化研究：主导火山引擎AIGC行业深度调研，系统梳理AI技术在B端商业化落地的应用场景，为业务方提供技术趋势与竞品分析支持。
• 平台策略输出：为字节跳动（巨量引擎、抖音生活服务）、小红书提供商业化策略支持，主导编写《小红书线索经营通案》、《千帆推广通案》等官方标准课件，赋能全量销售团队与广告主。
• 全球营销洞察：负责小红书全球时装周营销调研，通过对奢品/时尚行业的深度扫描，产出行业峰会核心策略内容，定义平台级商业化营销通案。

核心能力：
- 行业研究与深度分析
- 商业化策略制定
- 平台级项目管理
- 跨部门协同`,
      tags: ["AI商业化", "策略运营", "行业研究", "AIGC"]
    },
    {
      id: 2,
      title: "品牌市场运营",
      company: "山中天艺术中心",
      date: "2024.05 - 2025.05",
      summary: "AI+艺术跨界策划，敏锐捕捉技术趋势，策划AI艺术展览，提升Gen-Z影响力",
      jd: `工作职责：
• AI+艺术跨界：敏锐捕捉AI艺术创作趋势，策划并执行AI技术相关艺术展览，将前沿技术转化为可感知的品牌文化IP
• 全链路AI产出：主导利用Midjourney、Runway等AIGC工具完成从策略、创意到海报及AI动画视频的全流程制作
• 资源整合与破圈：在0预算投入下，通过资源置换达成奔驰、三里屯太古里等跨界合作，实现品牌人群精准破圈
• IP孵化：战略性孵化"windYoung"艺术IP，通过深度洞察青年文化，构建高粘性的艺术家生态社区

核心能力：
- 创意策划与执行
- AI内容生产（Midjourney、Runway）
- 品牌跨界合作
- 社群生态运营`,
      tags: ["品牌运营", "AI创意", "项目管理", "内容策划"]
    },
    {
      id: 3,
      title: "品牌战略咨询顾问",
      company: "兆世原咨询机构",
      date: "2024.06 - 至今",
      summary: "战略咨询与行业研究，深度分析行业趋势，为企业提供商业化落地方案",
      jd: `工作职责：
• 行业深度研究：针对青少年AI教育赛道进行深度市场扫描，分析AI技术在科普教育场景下的交互潜力与商业化路径
• 方案设计：产出详尽的展厅升级与教育产品方案，体现对AI领域趋势的精准判断及复杂项目的全局规划能力
• 战略建议：为联想未来中心青少年AI教育战略提案，作为战略顾问支持Case Study开发
• 技术落地探索：深度研究AI技术在商业化传播中的应用边界

核心能力：
- 战略分析与建议
- 市场研究
- 方案设计
- 行业趋势判断`,
      tags: ["战略咨询", "市场研究", "AI教育", "商业分析"]
    },
    {
      id: 4,
      title: "硕士研究生｜广告学（品牌传播方向）",
      company: "中国传媒大学",
      date: "2021.09 - 2024.06",
      summary: "双一流学科排名A+，深耕品牌传播理论与实践研究",
      jd: `学位：广告学硕士（品牌传播方向）
学校：中国传媒大学（双一流，学科排名A+）
研究方向：品牌传播、数字营销、AI与创意

学术背景为后续从事品牌运营、营销策略、产品运营等工作奠定了坚实的理论与实践基础`,
      tags: ["品牌传播", "广告学", "双一流", "学术研究"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResume, setSelectedResume] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    date: '',
    summary: '',
    jd: '',
    tags: ''
  });

  const handleAddResume = () => {
    if (formData.title && formData.company) {
      const newResume = {
        id: Date.now(),
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(t => t)
      };
      setResumes([...resumes, newResume]);
      setFormData({ title: '', company: '', date: '', summary: '', jd: '', tags: '' });
      setShowUploadForm(false);
    }
  };

  const handleDeleteResume = (id) => {
    setResumes(resumes.filter(r => r.id !== id));
    if (selectedResume?.id === id) {
      setSelectedResume(null);
    }
  };

  const handleShareResume = (resume) => {
    const shareText = `我的${resume.title}简历版本 - ${resume.company} | ${resume.summary}`;
    if (navigator.share) {
      navigator.share({
        title: '简历展示',
        text: shareText
      }).catch(() => {});
    } else {
      alert(`分享链接：${window.location.href}\n\n${shareText}`);
    }
  };

  const filteredResumes = resumes.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* 头部 */}
      <header className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                我的职业探索之旅
              </h1>
              <p className="text-slate-500">
                {resumes.length} 个职位方向 • AI产品运营 / 品牌市场 / 出海营销
              </p>
            </div>
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <span>➕</span>
              添加简历
            </button>
          </div>
        </div>
      </header>

      {/* 个人信息卡片 */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">程安安 Anna Cheng</h2>
            <p className="text-slate-600 mt-1">中传广告学本硕 | AI营销先行者 | 7年专业背景</p>
            <p className="text-slate-500 text-sm mt-2">📧 buanancheng@gmail.com | 📱 18757186233</p>
          </div>
          <div className="text-right">
            <p className="text-slate-600 text-sm"><strong>核心方向：</strong></p>
            <p className="text-slate-500 text-sm">AI产品运营 / 品牌市场部 / 出海营销策略</p>
          </div>
        </div>
      </div>

      {/* 技能概览 */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">AI工具栈</h3>
            <p className="text-slate-600 text-sm">Midjourney / Runway / ChatGPT / 剪映AI / PS / AI / Canva / PR</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">语言能力</h3>
            <p className="text-slate-600 text-sm">英语流利（雅思6+ / CET-6），海外咨询与商务接洽经验</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h3 className="font-semibold text-slate-900 mb-2">核心优势</h3>
            <p className="text-slate-600 text-sm">行业研究 / 策略规划 / 创意执行 / 跨部门协同</p>
          </div>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl">🔍</span>
          <input
            type="text"
            placeholder="搜索职位、公司或技能..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
          />
        </div>
      </div>

      {/* 上传表单 */}
      {showUploadForm && (
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span>📤</span>
              添加新简历
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">职位名称</label>
                <input
                  type="text"
                  placeholder="如：后端工程师"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">目标公司</label>
                <input
                  type="text"
                  placeholder="如：ByteDance"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">日期</label>
                <input
                  type="text"
                  placeholder="2024.01"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">标签（逗号分隔）</label>
                <input
                  type="text"
                  placeholder="Java, 分布式, 微服务"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-medium mb-2">简介</label>
                <input
                  type="text"
                  placeholder="简短描述这份简历的特点"
                  value={formData.summary}
                  onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-medium mb-2">职位描述（JD）</label>
                <textarea
                  placeholder="粘贴职位描述..."
                  value={formData.jd}
                  onChange={(e) => setFormData({...formData, jd: e.target.value})}
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200 transition-all resize-none"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleAddResume}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg font-semibold transition-all"
              >
                保存简历
              </button>
              <button
                onClick={() => setShowUploadForm(false)}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 py-2 rounded-lg font-semibold transition-all"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 简历卡片网格 */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {filteredResumes.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💼</div>
            <p className="text-slate-500 text-lg">还没有简历呢，来添加第一份吧！</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResumes.map(resume => (
              <div
                key={resume.id}
                onClick={() => setSelectedResume(resume)}
                className="group cursor-pointer h-full"
              >
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between transform transition-all duration-300 hover:border-slate-400 hover:shadow-lg hover:-translate-y-1">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{resume.title}</h3>
                        <p className="text-slate-600">{resume.company}</p>
                      </div>
                      <span className="text-2xl">📄</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{resume.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {resume.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      📅
                      {resume.date}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShareResume(resume);
                        }}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-all text-slate-600 text-lg"
                        title="分享"
                      >
                        📤
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteResume(resume.id);
                        }}
                        className="p-2 hover:bg-red-50 rounded-lg transition-all text-slate-600 hover:text-red-600 text-lg"
                        title="删除"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 详情面板 */}
      {selectedResume && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedResume(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="bg-slate-50 p-8 border-b border-slate-200 flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{selectedResume.title}</h2>
                <p className="text-lg text-slate-600">{selectedResume.company}</p>
              </div>
              <button
                onClick={() => setSelectedResume(null)}
                className="p-2 hover:bg-slate-200 rounded-lg transition-all text-slate-600 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* 内容 */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">简介</h3>
                <p className="text-slate-600">{selectedResume.summary}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">技能标签</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedResume.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">职位描述</h3>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-600 whitespace-pre-wrap font-mono text-sm max-h-60 overflow-y-auto">
                  {selectedResume.jd}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleShareResume(selectedResume)}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition-all"
                >
                  📤
                  分享这份简历
                </button>
                <button
                  onClick={() => setSelectedResume(null)}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 py-3 rounded-lg font-semibold transition-all"
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
