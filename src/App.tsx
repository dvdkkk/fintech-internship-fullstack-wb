import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Users, BookOpen, Briefcase, Award, MessageSquare, 
  CheckCircle2, ArrowRight, Monitor, Cloud, Layers, Settings, 
  Target, TrendingUp, MapPin, Coffee, Laptop, Book, Cpu, 
  FileText, Headphones, UserCheck, Building2, GraduationCap, 
  Lightbulb, Zap, Globe, ShieldCheck, ChevronRight,
  Phone, Send, ChevronDown, Menu, X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navItems = [
    { name: "과정요약", href: "#hero" },
    { name: "교육비전&혜택", href: "#core-competencies" },
    { name: "커리큘럼", href: "#curriculum" },
    { name: "취업지원", href: "#partners" },
    { name: "교육환경", href: "#support" },
    { name: "선발 절차", href: "#selection-process" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span 
              className="font-gmarket text-[#3752A6] text-xl font-bold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              핀테크 인턴십 코스
            </span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-bold text-gray-700">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-blue-600 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#apply" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">
              지원하기
            </a>
          </div>

          {/* Mobile Apply Button */}
          <a 
            href="#apply" 
            className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse hover:animate-none transition-all"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담신청
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4 text-sm font-bold text-gray-700">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="hover:text-blue-600 transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-12 pb-12 scroll-mt-20" id="hero">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-6 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="https://postfiles.pstatic.net/MjAyNjAzMjZfNzkg/MDAxNzc0NTA3NzUwODY1._w_hKkdDtDgGrzl5YKuGQjRTSQO8tsmBaJXoDqFUmL8g.eTRuw-FJJQ1ETF_feX-BGrVCTOD6ZGqW6HoJel7LQ34g.JPEG/image+(30).jpg?type=w966" 
              alt="핀테크 인턴십 코스" 
              className="w-full aspect-[2048/1140] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm"
          >
            K-디지털 트레이닝 전액 국비지원
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6 tracking-tight leading-tight"
          >
            <span 
              className="font-gmarket text-[#3752A6] text-4xl md:text-6xl"
            >
              핀테크 인턴십 코스
            </span> <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-4xl md:text-6xl">풀스택 개발자 과정</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-medium break-keep"
          >
            단순 구현을 넘어 기획부터<br />
            배포, 운영까지 책임지는<br />
            자기 주도형 육각형 개발자로 성장하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <Calendar className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">지원 일정</div>
              <div className="font-bold text-gray-900">26. 03. 11(수) - 04. 27(월)</div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">교육 일정</div>
              <div className="font-bold text-gray-900">26. 04. 28(화) - 11. 02(월)</div>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-sm text-gray-500 font-medium mb-1">모집 인원</div>
              <div className="font-bold text-gray-900">25명 (선착순 마감)</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Why Fintech */}
      <section className="py-24 bg-gray-900 text-white" id="intro">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">핀테크 개발자 과정을 배워야 하는 이유</h2>
            <p className="text-gray-400 max-w-3xl text-lg break-keep">
              4차 산업혁명 기술의 발전과 더불어 핀테크(Fintech) 산업이 급속히 성장하고 있습니다. 정부와 민간이 합심하여 집중 육성하는 유망 분야로 산업 발전의 무한한 가능성을 열어갈 것으로 기대를 모으고 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMjIg/MDAxNzc0NTA1NjQwMDgz.PV_zR1Jnc7E5FFLIxy04VzYRnbfxxJa-qURdwf09V8Mg.ZZGCI38s5DNVpbcu12tGQMkYTWUgqZt90tPTGRzyHKYg.JPEG/image_(32).jpg?type=w966" alt="핀테크 산업의 무한 확장" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-1">
                <Globe className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">핀테크 산업의 무한 확장</h3>
                <p className="text-gray-300 mb-6 leading-relaxed break-keep">
                  핀테크 기업은 AI, 블록체인, 빅데이터 등 첨단 기술을 활용하여 은행, 로보어드바이저, 인슈어테크 등 다양한 영역에서 혁신적인 금융 서비스로 자리매김하고 있습니다.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 글로벌 세계 핀테크 시장 규모는 2024년 3,401억 달러에서 2032년 1조 1,520억 달러에 이를 것으로 예상</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> 국내 정부가 5천억 원 규모의 대규모 펀드를 조성하며 핀테크 산업에 적극 지원</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMTU4/MDAxNzc0NTA1NjQwMDM3.Jk1c_meMQ9R5eCL2V8ar1UnZAYSDTdSPQCGQmLHw2nEg.CLpkqAYlY39s7Xi7oOqB2LL0qEwfR_Xb3skTjy9myzcg.JPEG/image_(33).jpg?type=w966" alt="취업 시장에서 경쟁력 있는 개발자로 성장" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-10 flex-1">
                <TrendingUp className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">취업 시장에서 경쟁력 있는 개발자로 성장</h3>
                <p className="text-gray-300 mb-6 leading-relaxed break-keep">
                  핀테크 산업에서 우수한 개발 인력에 대한 수요가 지속적으로 높아지고 있지만 단순한 개발 역량만으로는 부족합니다. 기술 뿐만 아니라 금융 및 금융 서비스에 대한 이해도가 필요합니다.
                </p>
                <div className="bg-gray-700/50 p-4 rounded-xl text-sm text-gray-300 border border-gray-600 break-keep">
                  핀테크 산업에 특화된 교육 프로그램을 통해 전문성을 키운다면 차별화된 경쟁력을 확보할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-white scroll-mt-20" id="core-competencies">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핀테크 기업의 채용 니즈를 반영한 교육 과정</h2>
            <p className="text-gray-600 text-lg max-w-3xl break-keep">
              금융과 IT 융합인 핀테크는 도메인 특성상 지식 습득의 어려움으로 인한 진입 장벽이 존재합니다. 핀테크 풀스택 개발자 과정은 여러 핀테크 기업의 요구 사항을 반영하여 만들어졌습니다. 도메인 지식과 실무 역량을 함께 기를 수 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMTc1/MDAxNzc0NTA1NjQwNzAy.Q3eGrbL75yJ66P5Qe7Kl1pVzongKY6_-62B9oEXq5lkg.gTfL09ecjc0ra3K4iLMQaB19_T8hDXPKGFwTgLxnGhQg.JPEG/image_(34).jpg?type=w966", icon: Building2, title: "핀테크 도메인 이해", desc: "디지털 금융 기술 동향, 혁신 서비스 사례, 보안 및 규제 이슈 등 핀테크 산업 전반에 대한 심층 지식을 습득합니다." },
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMzAw/MDAxNzc0NTA1NjQwNjky.nHOdptDNxuiJTyhsfW3-NR6PfyCPyEXABmmZTJnpP3cg.fUjojcA7LA1lxqUNp9hpAb_bTZDXOEmuoVLQSn5UiS8g.JPEG/image_(35).jpg?type=w966", icon: Cloud, title: "클라우드 활용 역량", desc: "클라우드 기반 인프라는 핀테크 기업의 유연성과 보안을 모두 만족시킵니다. 금융권 클라우드 정책과 지원 기조에 발맞춰 클라우드 서비스 이해 및 활용 기술을 배웁니다." },
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMTU0/MDAxNzc0NTA1NjQwNjU1.MGNrBqSGp_YCkV7P9-l4ECcX8p2Q6oij8DBo-0Z7IWgg.oDn05bJJNqHC2EHqlhZa5cq0Oywyhk3uLqYLY2lYI7Ug.JPEG/image_(36).jpg?type=w966", icon: Layers, title: "풀스택 역량", desc: "요구 사항 분석을 토대로 프론트엔드와 백엔드 영역을 모두 구현할 수 있는 통합 개발 능력을 갖춥니다. (React, Next.js, Spring Boot, MySQL 등)" },
              { image: "https://postfiles.pstatic.net/MjAyNjAzMjZfMTM4/MDAxNzc0NTA1NjQwMDYx.XhDsGVKtbPcdBoxAzaqa-XNfaHavYLadhmiY7ohn-G0g.lVSpQTEGnG0RKFYoZEGrUcWtAVBW37FEdXAIk_EiOJUg.JPEG/image_(37).jpg?type=w966", icon: Target, title: "프로젝트 매니징 역량", desc: "요구사항 정의부터 설계, 구현에 이르는 전체 프로젝트 라이프사이클을 실습합니다. 핀테크 API와 클라우드 기술을 활용해 웹 서비스를 직접 개발합니다." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-1">
                  <item.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed break-keep">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50" id="benefits">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">특별한 혜택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Award, title: "훈련장려금", desc: "최대 300,000원" },
              { icon: Laptop, title: "학습용 PC", desc: "고성능 데스크톱 및\n노트북 지원" },
              { icon: Book, title: "전문 서적", desc: "15만 원 상당 교재 지원" },
              { icon: Settings, title: "실무용 도구", desc: "실전 프로젝트\n수행 도구 지원" },
              { icon: Cpu, title: "생성형 AI 서비스", desc: "자체 AI Claude 계정 및\nChat GPT 제공" },
              { icon: FileText, title: "자격증 응시료", desc: "취득 자격증\n응시료 환급" },
              { icon: MapPin, title: "구름톤 in JEJU", desc: "우수 수료생 대상\n구름 해커톤 지원 시 가산점" },
              { icon: Cloud, title: "쿠버네티스 클러스터", desc: "창업자 대상\n창업 관련 혜택 지원" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-blue-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">이런 분들께 추천합니다</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "디지털 금융에 흥미 또는 관련 역량을 갖춘 핀테크 전문가를 꿈꾸는 분",
              "다양한 기술 스택을 실습 중심으로 익히고 바로 투입 가능한 실력을 쌓고 싶은 분",
              "핀테크 기업과제 경험하며 직무 이해도와 커리어 연계성을 높이고 싶은 분"
            ].map((text, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-left">
                <CheckCircle2 className="w-8 h-8 text-blue-300 mb-4" />
                <p className="text-lg font-medium leading-relaxed break-keep">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-[#CDE8FF] scroll-mt-20" id="curriculum">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">교육 과정 로드맵</h2>
            <p className="text-gray-700 text-lg max-w-3xl break-keep font-medium">
              IT 시장에서 수요가 높은 Java & Spring Boot로 백엔드 깊이를 더하고, Next.js & TypeScript로 트렌디한 프론트엔드 역량까지 확보합니다. 단순 구현을 넘어 기획부터 배포, 운영까지 책임지는 자기 주도형 육각형 개발자 양성을 목표로 합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { month: "1개월", title: "Java 기초 및\nDB 기초" },
              { month: "2개월", title: "웹 기초 및\n백엔드" },
              { month: "3개월", title: "프론트엔드" },
              { month: "4개월", title: "클라우드 기술" },
              { month: "5-6개월", title: "기업 연계 프로젝트" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-[#2B449C] shadow-sm flex flex-col items-center justify-center text-center min-h-[200px] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 mb-4 text-[#2B449C]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="text-xl font-extrabold text-gray-900 mb-3">{item.month}</div>
                <div className="text-base font-bold text-gray-800 whitespace-pre-line leading-snug break-keep">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Curriculum Steps */}
      <section className="py-24 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="mb-16 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">상세 커리큘럼</h2>
            <p className="text-gray-600 text-lg max-w-3xl break-keep">
              핀테크 서비스에 대한 이해부터 풀스택 개발자에게 필요한 역량을 포괄적으로 다룹니다. 실무와 가까운 환경에서 전문가 멘토와 함께 사용자 중심의 핀테크 개발 경험을 쌓을 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
              <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold rounded-full mb-4">온라인</div>
              <h3 className="text-2xl font-bold mb-2">이론 교육</h3>
              <p className="text-gray-600 break-keep">탄탄한 기본기를 쌓고 능동적인 학습 환경에서 자기주도 학습 능력을 키웁니다.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
              <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-bold rounded-full mb-4">오프라인</div>
              <h3 className="text-2xl font-bold mb-2">기업 연계 및 팀 프로젝트</h3>
              <p className="text-gray-600 break-keep">실제 연계 기업에 상주하며 실무 역량을 기릅니다. 팀 그리고 멘토와 함께 성장합니다.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "STEP 1", title: "Java & Git으로 개발 환경 세팅", desc: "JDK, IntelliJ, GitHub 세팅 및 협업 플로우\n변수, 연산자, 조건문, 반복문, OOP 개념 실습" },
              { step: "STEP 2", title: "객체지향 설계와 클래스 구조 이해", desc: "클래스, 상속, 인터페이스, 다형성, 예외 처리\n제너릭, 리플렉션, 접근제어자, static 등 핵심 문법" },
              { step: "STEP 3", title: "Spring Boot 백엔드 구축", desc: "Controller–Service–Repository 구조 설계\nREST API, JPA, 데이터베이스 CRUD, Validation\nJWT 인증, 예외처리, 로깅" },
              { step: "STEP 4", title: "Database & AWS 실습", desc: "MySQL 스키마 설계, ERD 작성, SQL 쿼리 최적화\nAWS EC2, RDS를 활용한 배포 환경 구성" },
              { step: "STEP 5", title: "React, NextJS 기반 프론트엔드 구현", desc: "컴포넌트 설계, 상태관리, 비동기 통신\nUI/UX 구현, 폼 처리, API 연동" },
              { step: "STEP 6, 7", title: "풀스택 통합 프로젝트 & 클라우드 네이티브 배포", desc: "기존 백엔드와 프론트엔드 기술을 통합하는 실전 핀테크 프로젝트\nDocker와 Kubernetes 기반 CI/CD 파이프라인 구축 및 배포" },
              { step: "STEP 8", title: "기업 연계 프로젝트", desc: "핀테크 기업 현업 과제 기반 기업상주형 프로젝트 수행\n상용 서비스 핵심 기능 구현 및 현업 문제 해결 능력 강화", colSpan: 2 }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors ${item.colSpan ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className="text-sm font-bold text-blue-600 mb-2">{item.step}</div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-left text-sm text-gray-400 mt-8">* 로드맵 및 커리큘럼은 교육 과정 운영 상황에 따라 일부 변경될 수 있습니다.</p>
        </motion.div>
      </section>

      {/* Instructor & Projects */}
      <section className="py-24 bg-white" id="project">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-8">실전 경험 쌓는 팀 프로젝트</h2>
              <p className="text-gray-600 mb-8 text-lg break-keep">
                핀테크를 주제로 팀 프로젝트를 진행합니다. 실제 비즈니스에 적용할 수 있는 수준의 프로젝트 구현 경험을 쌓습니다. 수료까지 함께 달려온 팀원들과 완성도 높은 결과물을 만들어냅니다.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">다양한 프로젝트 주제</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    실제 기업이 다루는 현업 과제와 신규 사업 아이디어를 기반으로 실무 프로젝트를 경험합니다. 문제 정의부터 서비스 구조화, 핵심 기능 도출까지 전 과정에서 실무 중심의 사고를 익히며, 기획자가 현장에서 맞닥뜨리는 의사결정 방식과 업무 프로세스를 직접 체감할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Users className="w-8 h-8 text-blue-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">참여 기업 현직자 멘토링</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    현직자가 프로젝트 멘토로 참여해 밀착 지도 합니다. 실무적인 피드백 뿐만 아니라, 함께 문제를 해결하며 프로젝트 관리 역량을 키웁니다. 이 과정에서 최신 기술 트렌드와 업계 동향을 파악할 수 있습니다.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 md:col-span-2">
                  <Award className="w-8 h-8 text-purple-500 mb-4" />
                  <h4 className="text-xl font-bold mb-3">경진대회</h4>
                  <p className="text-gray-600 text-sm leading-relaxed break-keep">
                    프로젝트 최종 결과물을 발표해 실력을 평가 받습니다. 참여 기업에 실력을 인정받아 취업으로 연결시킬 있는 기회를 얻습니다. 또한 결과물은 포트폴리오로 활용할 수 있어 커리어 준비에 큰 자산이 됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners & Career Support */}
      <section className="py-24 bg-gray-900 text-white scroll-mt-20" id="partners">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">국내 최대 규모 한국핀테크지원센터가 함께합니다</h2>
            <p className="text-gray-400 text-lg max-w-3xl break-keep">
              핀테크 인턴십 코스는 한국핀테크지원센터와 구름이 함께 설계한 실무 중심 교육 과정입니다. 실제 핀테크 기업 수요를 교육 과정에 반영해, 실무 역량 강화부터 기업 연계와 채용 기회까지 이어지는 커리어 경험을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfODEg/MDAxNzc0NTA1NjQwNDQ2.SOvsitI7wNXa2j6DhyCiAjkTOC7Yuf7zot7cP3JJYNIg.yRLmsnjqYlf7_WslXjAp2U0yDpr04qZzifDCh0i6x0gg.JPEG/image_(38).jpg?type=w966" alt="한국핀테크지원센터" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">한국핀테크지원센터</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 금융위원회 산하 국내 최대 핀테크 전문 지원 센터</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 핀테크 기업 육성, 정책 지원 등 산업 전 주기 지원</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 핀테크 규제 샌드박스 운영 기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> 일자리 매칭존 통한 핀테크 산업 전문 취업 연계</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
              <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMjkw/MDAxNzc0NTA1NjQwNjMw.97ng_jouaFHb5yUYgVkB4luIwBrNQUYCY5TznUExU0Mg.OmjiNjtizRBb_t3Hjs1wyiwz0PtMt5nKjs9413Soh_Mg.JPEG/image_(39).jpg?type=w966" alt="구름 (goorm)" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-3 text-indigo-400">구름 (goorm)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 고용노동부 인증 K-디지털 트레이닝 전문 훈련기관</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 국내 대표 AX(AI Transformation) 전문 기업</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> 올해의 브랜드 대상 2024·2025 2년 연속 1위 수상</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" /> KDT 교육 과정 통해 1,800명의 누적 교육생 배출</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4 text-center">취업기회 확실한 기업 연계 코스</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "우수 수료생 혜택", desc: "핀테크 인턴십 코스 연계 기업 지원 시 서류 전형 면제", highlighted: true },
                { title: "대표 핀테크 기업 협력", desc: "국내 대표 핀테크 기업과 함께하는 실무 중심 커리큘럼" },
                { title: "기업 연계 프로젝트", desc: "핀테크 기업의 실제 프로젝트 수행 기회 제공" },
                { title: "맞춤형 잡 매칭 서비스", desc: "‘핀테크 일자리 매칭 플랫폼’ 통한 구인 등록 및 관리 지원" },
                { title: "전문 상담사의 취업 컨설팅", desc: "‘일자리매칭존’ 통한 전문가의 취업 상담 제공" },
                { title: "현직자 네트워킹 행사", desc: "전문가 만남 통해 최신 기술 및 업계 동향 파악" }
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border ${item.highlighted ? 'bg-blue-900/30 border-blue-500/50' : 'bg-gray-800/50 border-gray-700/50'}`}>
                  <h4 className={`font-bold text-lg mb-2 ${item.highlighted ? 'text-yellow-400' : 'text-blue-300'}`}>{item.title}</h4>
                  <p className="text-gray-400 text-sm break-keep">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 text-left">
              <h3 className="text-2xl font-bold mb-2">현직자와 함께하는 멘토링 데이</h3>
              <p className="text-blue-100 max-w-2xl break-keep">
                국내를 대표하는 핀테크 기업의 현직자들과 매월 만납니다. 평소 취업 준비에 필요한 궁금증을 해결해보세요. 맞춤형 피드백을 통해 수강생 모두가 핀테크 인재로 성장할 수 있도록 돕습니다.
              </p>
            </div>
            <img src="https://postfiles.pstatic.net/MjAyNjAzMjZfMTgg/MDAxNzc0NTA1NjQwMDA0.VmJPvNuxZjGol42g4ipXLdgYh_KRVR9ncLujH7TngAkg.rD3T2c_nO_UZdVG8VW3VMLSzjaxJ2Fitqc4k8WGDZVMg.JPEG/image_(40).jpg?type=w966" alt="현직자와 함께하는 멘토링 데이" className="w-full aspect-[1921/906] object-cover" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </section>

      {/* Support & Location */}
      <section className="py-24 bg-white scroll-mt-20" id="support">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Support (Moved to top) */}
            <div>
              <h2 className="text-3xl font-bold mb-8">실전 역량 키우는 밀착 지원</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Monitor, title: "성취도별 학습 관리", desc: "구름 LXP를 통한 학습 현황 모니터링 및 취약 분야 보완" },
                  { icon: MessageSquare, title: "언제든 가능한 질문", desc: "실시간 질문, 게시판, AI 튜터를 통해 궁금증 해결" },
                  { icon: UserCheck, title: "전문가 피드백", desc: "프로젝트 전 과정에서의 실무 피드백 제공" },
                  { icon: Users, title: "팀별 멘토링 진행", desc: "현직 개발자 멘토가 전담하여 팀별 성장 서포트" },
                  { icon: ShieldCheck, title: "전담 매니저의 관리", desc: "학습 집중을 위한 교육 운영 매니저의 전담 케어" },
                  { icon: Coffee, title: "오피스아워 with C-Level", desc: "구름 C-Level과의 1:1 대화 시간 지원" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed break-keep">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Center (Moved to bottom) */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-4">집중하기 좋은<br/>역삼역 1분 거리 교육장</h2>
              <p className="text-gray-600 mb-8 break-keep">
                교육생은 강남 교육장 회의실을 무료로 이용할 수 있습니다.<br/>
                <span className="text-sm text-gray-500">(위치: 서울 강남구 테헤란로 145 13, 14층)</span>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfNDMg/MDAxNzcwOTY4NDUxNjE5.591OWwUJSnBWA9DwlmaYSoDSYpAjriX0X57uKfwjdy4g.Jqib9AJzXW_lgPd-DoNFY5Gf3SzwgQm1w7YGZWaTHAQg.PNG/techup_learning_place_03.png?type=w966" alt="Lounge" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">라운지</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://postfiles.pstatic.net/MjAyNjAyMTNfMTg2/MDAxNzcwOTY4NDUxNjEy.8amY2OKWNQ5xGWpz8qF3nEuUoujNVrKxq9-j9E101G0g._kNERBC0F2uyAJiWEvauAz3uZZQ2s4XTrrOWTU0uEHog.PNG/techup_learning_place_05.png?type=w966" alt="Meeting Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-center font-bold text-gray-800 text-lg">회의실</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-900 text-white scroll-mt-20" id="selection-process">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">선발 절차</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "지원서 작성", desc: "수강하고 싶은 과정의 지원서를 작성합니다." },
              { step: "02", title: "HRD-Net 수강 신청", desc: "본 과정은 국민내일배움카드 소지자를 대상으로 진행합니다." },
              { step: "03", title: "지원자 평가", desc: "1차 서류 평가, 2차 비대면 인터뷰를 진행합니다." },
              { step: "04", title: "선발 발표", desc: "합격 여부는 개별 연락으로 안내드립니다." },
              { step: "05", title: "오리엔테이션", desc: "교육 과정에 대한 세부 사항을 안내드립니다." },
              { step: "06", title: "수강 시작", desc: "커리큘럼에 따라 본격적인 학습이 시작됩니다." }
            ].map((item, idx) => (
              <div key={idx} className="relative bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-blue-400 font-bold text-xl mb-4">STEP {item.step}</div>
                <h4 className="font-bold mb-2 break-keep">{item.title}</h4>
                <p className="text-sm text-gray-400 break-keep">{item.desc}</p>
                {idx < 5 && (
                  <ChevronRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600 z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-[#FFD600] scroll-mt-20" id="apply">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black tracking-tight">
              망설이지 마세요.<br/>
              국비교육 전문가가<br/>
              무료 상담해드립니다.
            </h2>
            <p className="text-lg text-black mb-12 font-medium break-keep">
              국비지원 자격 여부부터 취업 및 교육과정까지<br/>
              무료로 상담해드립니다.
            </p>
            
            <div className="space-y-6 mb-12">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD600] shrink-0">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">교육방식</div>
                  <div className="text-2xl font-extrabold text-black">100%온라인</div>
                </div>
              </div>
            </div>
            
            <div className="text-xl font-extrabold text-black">
              여러분의 꿈을 응원합니다!
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-black mb-6 flex items-center gap-2">
              빠른 교육상담 신청 <span className="w-2 h-2 rounded-full bg-red-600"></span>
            </h3>
            
            <form 
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitted(true);
                const formData = new FormData(e.currentTarget);
                const data = {
                  _form_id: "68aae499a65e4e8ccff02774469c5c70",
                  course: formData.get('course'),
                  name: formData.get('name'),
                  age: formData.get('age'),
                  phone: formData.get('phone'),
                  message: formData.get('message')
                };
                
                fetch("https://inputhaven.com/api/v1/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                  keepalive: true
                }).catch(console.error);
              }}
            >
              {isSubmitted ? (
                <div className="text-center py-10 text-xl font-bold text-black">
                  상담 신청이 완료되었습니다!
                  <button 
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="block w-full mt-4 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">과정명</label>
                    <input 
                      type="text" 
                      name="course"
                      readOnly 
                      value="핀테크 인텁십 코스-풀스택" 
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-bold focus:outline-none" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">이름</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="홍길동" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">나이</label>
                      <input 
                        type="text" 
                        name="age"
                        placeholder="예: 30" 
                        required
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">연락처</label>
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="010-0000-0000" 
                      required
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-medium" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">문의내용</label>
                    <textarea 
                      name="message"
                      placeholder="궁금하신 점을 자유롭게 적어주세요." 
                      rows={2} 
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 accent-red-600" 
                        defaultChecked 
                        required
                      />
                      <span className="text-sm font-bold text-gray-800">개인정보 수집 및 이용에 동의합니다.</span>
                    </label>
                    <button 
                      type="button" 
                      className="text-sm text-gray-500 underline underline-offset-2 hover:text-gray-800 font-medium"
                      onClick={() => {
                        const content = `개인정보 수집 및 이용 동의 (필수)
핀테크인턴쉽코스 실시간온라인문의 신청을 위해 다음과 같이 개인정보를 수집 및 이용합니다.

수집목적
온라인문의

수집항목
이름, 나이, 연락처, 문의내용

보유기간
60일`;
                        alert(content);
                      }}
                    >
                      자세히 보기
                    </button>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#111111] text-white font-bold text-lg py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors mt-4"
                  >
                    무료상담 신청하기 <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                    개인정보는 상담 목적으로만 사용됩니다.
                  </p>
                </>
              )}
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} goorm. All rights reserved.</p>
        </div>
      </footer>
      {/* Floating Apply Button */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <a 
            href="#apply" 
            className="block w-full bg-blue-600 text-white py-3 md:py-4 text-center font-bold text-base md:text-lg hover:bg-blue-700 transition-colors shadow-lg rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#apply');
              if (element) {
                const isMobile = window.innerWidth < 768;
                const offset = isMobile ? 400 : 0; // 모바일에서 20행(약 400px) 아래로 이동
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
          >
            상담 신청하기
          </a>
        </div>
      </motion.div>
    </div>
  );
}
