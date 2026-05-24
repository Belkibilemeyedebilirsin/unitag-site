import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  BadgePercent,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  Cookie,
  ExternalLink,
  Home,
  MessageCircle,
  School,
  ShoppingBag,
  Sparkles,
  Tags,
  Users,
  X,
} from "lucide-react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJSSfCWHtEZrfzOYqF8ZmdacY-Vk5jsZ5FKjiZOKSo20Ei7g/viewform?usp=header";
const INSTAGRAM_URL = "https://www.instagram.com/unitag_app/";
const LINKEDIN_URL = "https://www.linkedin.com/company/unitagtr/";
const APP_STORE_URL =
  "https://apps.apple.com/tr/app/%C3%BCni-tag-%C3%B6%C4%9Frenci-platformu/id6764850080?l=tr";

const navItems = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Temsilcilik", href: "#temsilcilik" },
  { label: "Yol Haritası", href: "#roadmap" },
  { label: "Ekip", href: "#ekip" },
  { label: "SSS", href: "#sss" },
];

const features = [
  {
    icon: BadgePercent,
    title: "Öğrenci İndirimleri",
    text: "Kafe, restoran, spor, eğlence ve hizmet alanlarında öğrencilere özel fırsatları keşfet.",
  },
  {
    icon: ShoppingBag,
    title: "İkinci El Alım Satım",
    text: "Kitap, elektronik, mobilya ve öğrenci ihtiyaçlarına yönelik ilanları tek yerde topla.",
  },
  {
    icon: Home,
    title: "Ev, Oda ve Yurt",
    text: "Öğrenciler için konaklama seçeneklerini şehir ve kampüs odağında daha kolay incele.",
  },
  {
    icon: Tags,
    title: "Kampüs Fırsatları",
    text: "Üniversite çevresindeki avantajları, fırsatları ve öğrenci odaklı içerikleri takip et.",
  },
];

const roadmap = [
  {
    icon: Briefcase,
    title: "Kariyer ve İş İlanları",
    text: "Staj, part-time iş ve kariyer fırsatları için öğrencilere özel yeni alan.",
  },
  {
    icon: School,
    title: "Üniversite Tanıtımları",
    text: "Üniversiteler, kampüsler, bölümler ve şehir yaşamı hakkında tanıtım sayfaları.",
  },
  {
    icon: MessageCircle,
    title: "Sohbet Özelliği",
    text: "İlanlar, fırsatlar ve kampüs konuları için daha hızlı iletişim altyapısı.",
  },
  {
    icon: BookOpen,
    title: "Ders Notları Paylaşımı",
    text: "Ders notları, kaynaklar ve faydalı içerikler için topluluk odaklı paylaşım alanı.",
  },
  {
    icon: Users,
    title: "Temsilcilik Ağı",
    text: "Farklı üniversitelerde temsilcilerle büyüyen kampüs bazlı öğrenci ağı.",
  },
  {
    icon: Building2,
    title: "Daha Fazla Şehir ve İşletme",
    text: "Daha fazla şehirde daha fazla öğrenci dostu işletme ve aktif kullanıcı topluluğu.",
  },
];

const team = [
  {
    name: "Batuhan Tiktaş",
    role: "Ortak Kurucu",
    focus: "Ürün vizyonu, büyüme stratejisi ve kampüs ağı.",
  },
  {
    name: "Batuhan Dinçer",
    role: "Ortak Kurucu",
    focus: "Operasyon, iş birlikleri ve temsilcilik yapılanması.",
  },
  {
    name: "Cemil Bakırcı",
    role: "Geliştirici",
    focus: "Uygulama geliştirme, teknik altyapı ve ürün deneyimi.",
  },
];

const faqs = [
  {
    q: "Unitag kimler için?",
    a: "Unitag; öğrencilerin indirim, ilan, konaklama ve kampüs odaklı ihtiyaçlarını tek platformda takip edebilmesi için geliştirilen bir öğrenci platformudur.",
  },
  {
    q: "Herkes kayıt olabilir mi?",
    a: "Evet, Unitag’a herkes kayıt olabilir. Ancak öğrencilere özel belirli özellikleri kullanabilmek için öğrenci belgesiyle doğrulama yapılması gerekir.",
  },
  {
    q: "İşletmeler nasıl kayıt olur?",
    a: "İşletmeler Unitag uygulaması içindeki işletme kayıt süreci üzerinden platforma dahil olabilir. Web sitesinde ayrıca işletme başvuru formu kullanılmaz.",
  },
  {
    q: "Üniversite temsilcisi olmak için ne yapmalıyım?",
    a: "Sitedeki temsilcilik başvuru formuna giderek bilgilerini paylaşabilirsin. Başvurular Google Form üzerinden alınır.",
  },
  {
    q: "Unitag’da sonraki güncellemelerde neler olacak?",
    a: "Kariyer ve iş ilanları alanı, üniversite tanıtımları, sohbet özelliği, ders notları paylaşımı ve temsilcilik ağı gibi geliştirmeler yol haritasında yer alıyor.",
  },
];

const legalDocs = {
  cookie: {
    title: "Çerez Politikası",
    updated: "Son güncelleme: 2026",
    sections: [
      [
        "Amaç",
        "Bu Çerez Politikası, öğrenciler için indirim ve kampanya hizmeti sunan Unitag mobil uygulaması ve web platformu kapsamında kullanılan çerezler hakkında kullanıcıları bilgilendirmek amacıyla hazırlanmıştır.",
      ],
      [
        "1. Çerez Nedir?",
        "Çerezler, ziyaret ettiğiniz internet siteleri veya kullandığınız uygulamalar tarafından cihazınıza kaydedilen küçük veri dosyalarıdır. Bu dosyalar kullanıcı tercihlerini hatırlama, oturum yönetimi, kullanıcı deneyimini geliştirme ve güvenlik kontrolleri için kullanılabilir.",
      ],
      [
        "2. Çerezlerin Kullanım Amaçları",
        "Unitag platformunda çerezler; kullanıcı deneyimini geliştirmek, kullanıcı tercihlerini saklamak, uygulama performansını analiz etmek, sistem hatalarını tespit etmek, konuma dayalı hizmet sağlamak, güvenlik kontrolleri yapmak ve kampanya performanslarını ölçmek amacıyla kullanılabilir.",
      ],
      [
        "3. Kullanılan Çerez Türleri",
        "Zorunlu çerezler temel işlevlerin çalışması için gereklidir. Performans ve analiz çerezleri kullanım davranışlarını ve hata raporlarını anlamaya yardımcı olur. İşlevsel çerezler dil ve kullanıcı ayarları gibi tercihleri hatırlar. Reklam ve pazarlama çerezleri kullanıcıların ilgisini çekebilecek kampanya ve işletme tekliflerinin sunulmasını sağlayabilir.",
      ],
      [
        "4. Çerezler Aracılığıyla İşlenen Veriler",
        "IP adresi, cihaz bilgileri, oturum bilgileri, uygulama kullanım davranışları ve izin verilmesi halinde konum bilgisi işlenebilir. Bu veriler KVKK kapsamında işlenmektedir.",
      ],
      [
        "5. Üçüncü Taraflarla Paylaşım",
        "Çerezler aracılığıyla elde edilen veriler analiz ve istatistik hizmet sağlayıcıları, teknik altyapı hizmet sağlayıcıları ve yasal yükümlülük durumunda yetkili kamu kurumlarıyla paylaşılabilir. Veriler yalnızca hizmetin sunulması amacıyla paylaşılır.",
      ],
      [
        "6. Saklanma Süresi",
        "Oturum çerezleri oturum süresi boyunca, kalıcı çerezler ise kullanım amaçlarına göre belirli süre boyunca cihazda saklanabilir. Süre sonunda çerezler otomatik olarak silinir.",
      ],
      [
        "7. Çerezlerin Yönetimi",
        "Kullanıcılar cihaz veya tarayıcı ayarları üzerinden çerezleri engelleyebilir, mevcut çerezleri silebilir veya çerez kullanımını sınırlandırabilir. Ancak çerezlerin devre dışı bırakılması bazı özelliklerin çalışmamasına neden olabilir.",
      ],
      [
        "8. Değişiklik",
        "Bu politika gerekli görüldüğünde güncellenebilir. Güncellenmiş politika uygulama veya web sitesi üzerinden kullanıcılara sunulur.",
      ],
      [
        "9. İletişim",
        "E-posta: destek@unitagapp.com.tr | Adres: Kozluk Mahallesi, Vadi Apartmanı No:16 Daire:7, İzmit / Kocaeli",
      ],
    ],
  },
  kvkk: {
    title: "UNITAG Aydınlatma Metni",
    updated: "Son güncelleme: 2026",
    sections: [
      [
        "Amaç",
        "Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, Unitag tarafından veri sorumlusu sıfatıyla, kullanıcılarımızın ve işletmecilerimizin kişisel verilerinin işlenme süreçleri hakkında bilgilendirilmesi amacıyla hazırlanmıştır.",
      ],
      [
        "1. Veri Sorumlusu",
        "Unitag olarak, kişisel verilerinizin güvenliği ve gizliliği önceliğimizdir. İletişim bilgilerimiz metnin sonunda yer almaktadır.",
      ],
      [
        "2. İşlenen Kişisel Veriler",
        "Kullanıcılar için konum, kamera erişimi, e-posta, telefon, ad-soyad ve öğrenci doğrulama bilgileri işlenebilir. İşletmeciler için konum, kamera erişimi, iletişim bilgileri, kurumsal e-posta ve işletmenin genel bilgileri işlenebilir.",
      ],
      [
        "3. Veri İşleme Amaçları",
        "Kişisel verileriniz uygulama özelliklerinin sunulması, indirimler ve konum bazlı fırsatların gösterilmesi, pazarlama ve kampanya faaliyetlerinin yürütülmesi, kullanıcı ve öğrenci statüsünün doğrulanması ve işletme-kullanıcı iletişiminin sağlanması amacıyla işlenebilir.",
      ],
      [
        "4. Veri İşleme Yöntemleri",
        "Kişisel verileriniz web sitesi ve mobil uygulama üzerinden tamamen otomatik veya yarı otomatik yöntemlerle, elektronik ortamda toplanmaktadır.",
      ],
      [
        "5. Veri Paylaşımı",
        "Toplanan veriler yalnızca hizmetin ifası için gerekli olduğu durumlarda iş ortaklarımızla, yetkili kamu kurum ve kuruluşlarıyla veya operasyonel destek aldığımız üçüncü taraf hizmet sağlayıcılarla KVKK’ya uygun şekilde paylaşılabilir.",
      ],
      [
        "6. Veri Saklama Süresi",
        "Kişisel verileriniz işleme amacının gerektirdiği süre boyunca veya yasal zaman aşımı süreleri dikkate alınarak saklanacak; süre sonunda imha edilecek veya anonim hale getirilecektir.",
      ],
      [
        "7. Veri Sahibinin Hakları",
        "KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, yanlış verilerin düzeltilmesini isteme, verilerin silinmesini veya yok edilmesini talep etme ve uğradığınız zararın giderilmesini isteme haklarına sahipsiniz.",
      ],
      [
        "8. İletişim Bilgileri",
        "E-posta: destek@unitagapp.com.tr | Adres: Kozluk Mahallesi, Vadi Apartmanı No:16 Daire:7, İzmit / Kocaeli",
      ],
      [
        "Not",
        "Kamera ve konum gibi hassas izinler mobil cihazlarda işletim sistemi düzeyinde ayrıca sorulmalıdır. Bu metin, bu izinlerin neden alındığını açıklayan hukuki dayanak niteliğindedir.",
      ],
    ],
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useIsMobile() {
  const getInitialValue = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  };

  const [isMobile, setIsMobile] = useState(getInitialValue);

  useEffect(() => {
    let timeoutId;

    const checkScreen = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150);
    };

    window.addEventListener("resize", checkScreen, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return isMobile;
}

function Reveal({ children, className = "", delay = 0, y = 18, as = "div" }) {
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    if (!isMobile || reduceMotion || !ref.current) return undefined;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("unitag-reveal-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isMobile, reduceMotion]);

  if (isMobile || reduceMotion) {
    return (
      <Tag
        ref={ref}
        className={cn("unitag-reveal", className)}
        style={{
          "--unitag-delay": `${delay}ms`,
          "--unitag-y": `${y}px`,
        }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.58,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/12 bg-red-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-red-600">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function MobileAbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden md:hidden">
      <div className="unitag-mobile-abstract-base" />

      <div className="unitag-mobile-orbit unitag-mobile-orbit-a" />
      <div className="unitag-mobile-orbit unitag-mobile-orbit-b" />
      <div className="unitag-mobile-orbit unitag-mobile-orbit-c" />

      <span className="unitag-mobile-dot unitag-mobile-dot-a" />
      <span className="unitag-mobile-dot unitag-mobile-dot-b" />
      <span className="unitag-mobile-dot unitag-mobile-dot-c" />
      <span className="unitag-mobile-dot unitag-mobile-dot-d" />
    </div>
  );
}

function DesktopAmbientNetwork({ variant = "default" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.10),transparent_42%)]" />
      </div>
    );
  }

  const dots = Array.from({ length: variant === "dense" ? 18 : 10 }, (_, i) => ({
    id: i,
    left: `${5 + ((i * 23) % 88)}%`,
    top: `${7 + ((i * 37) % 82)}%`,
    delay: i * 0.08,
  }));

  const paths = [
    "M20 180 C120 70 230 260 340 150 S570 95 710 210",
    "M40 95 C170 200 300 35 450 115 S650 260 790 95",
    "M70 285 C210 230 330 360 490 280 S665 190 815 300",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block">
      <motion.div
        className="absolute inset-[-10%]"
        animate={{
          x: variant === "dense" ? [8, -22, 8] : [-6, 18, -6],
          y: variant === "dense" ? [-14, 34, -14] : [-10, 22, -10],
          rotate: variant === "dense" ? [-4, 9, -4] : [2, -6, 2],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-[22rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-red-500/10 blur-[42px] sm:h-[30rem] sm:w-[60rem]"
          animate={{ opacity: [0.18, 0.5, 0.18], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 860 420" preserveAspectRatio="none">
          {paths.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              fill="none"
              stroke={index % 2 ? "rgba(17,17,17,0.09)" : "rgba(220,38,38,0.24)"}
              strokeWidth="1.05"
              strokeDasharray="6 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: [0.12, 1, 0.12], opacity: [0.16, 0.78, 0.16] }}
              viewport={{ once: false, amount: 0.18 }}
              transition={{ duration: 9 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
            />
          ))}
        </svg>

        {dots.map((dot) => (
          <motion.span
            key={dot.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-red-500/45 shadow-[0_0_18px_rgba(220,38,38,0.3)]"
            style={{ left: dot.left, top: dot.top }}
            animate={{ opacity: [0.16, 0.82, 0.16], scale: [0.7, 1.45, 0.7], y: [0, dot.id % 2 ? 8 : -8, 0] }}
            transition={{
              duration: 5.2 + (dot.id % 5) * 0.32,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function BackgroundLayer({ variant = "default" }) {
  const isMobile = useIsMobile();

  return (
    <>
      <MobileAbstractBackground />
      {!isMobile && <DesktopAmbientNetwork variant={variant} />}
    </>
  );
}

function TopNav() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 hidden border-b border-[#111]/8 bg-white/70 backdrop-blur-2xl md:block"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-8">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-[#111]/55 transition hover:text-red-600">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
      className="relative h-full min-h-[420px] w-full overflow-visible"
    >
      <DesktopAmbientNetwork variant="dense" />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[210px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-red-500/20"
        animate={{ rotate: 360, scale: [0.94, 1.05, 0.94] }}
        transition={{
          rotate: { duration: 48, repeat: Infinity, ease: "linear" },
          scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[145px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#111]/10"
        animate={{ rotate: -360, opacity: [0.22, 0.76, 0.22] }}
        transition={{
          rotate: { duration: 58, repeat: Infinity, ease: "linear" },
          opacity: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[18px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/45 blur-[18px]"
        animate={{ scaleX: [0.72, 1.16, 0.72], opacity: [0.22, 0.72, 0.22], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-16 text-[#111] sm:px-8 sm:pb-12 sm:pt-28 lg:pt-32"
    >
      <BackgroundLayer variant="dense" />

      {!isMobile && (
        <div className="pointer-events-none absolute inset-y-0 right-[-16%] z-0 hidden w-[68%] opacity-80 lg:block">
          <HeroVisual />
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center sm:min-h-[calc(100svh-7rem)]">
        <div className="w-full max-w-4xl text-center lg:text-left">
          <Reveal delay={60} y={22}>
            <h1 className="mx-auto max-w-4xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.075em] text-[#111] sm:text-6xl sm:leading-[0.9] lg:mx-0 lg:text-7xl xl:text-8xl">
              Unitag'la öğrenci olmak daha kolay
            </h1>
          </Reveal>

          <Reveal delay={130} y={18}>
            <p className="mx-auto mt-6 max-w-[21rem] text-[1.05rem] leading-7 text-[#111]/62 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8 lg:mx-0">
              Öğrenci indirimleri, ikinci el ilanlar, ev/oda/yurt seçenekleri ve kampüs fırsatları tek platformda.
            </p>
          </Reveal>

          <Reveal delay={210} y={16}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={APP_STORE_URL}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#111] px-6 py-4 text-base font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-600 md:shadow-[0_20px_60px_rgba(17,17,17,0.16)]"
              >
                <Apple className="h-5 w-5" /> App Store'dan İndir
              </a>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-white/90 px-6 py-4 text-base font-black text-red-700 shadow-sm transition hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-50 md:shadow-[0_20px_60px_rgba(220,38,38,0.08)] md:backdrop-blur-xl"
              >
                Üniversite Temsilcisi Ol <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#111]/10 bg-[#111] py-4 text-white sm:py-5">
      <div className="unitag-marquee-track flex w-max gap-6 whitespace-nowrap px-0 text-2xl font-black uppercase tracking-[-0.05em] md:gap-8 md:text-6xl md:tracking-[-0.06em]">
        {content.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-6 md:gap-8">
            {item}
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 md:h-3 md:w-3" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="ozellikler" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundLayer />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>Unitag’da neler var?</Kicker>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
              Öğrencinin şehirde ihtiyacı olan her şey tek platformda.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 50} y={20}>
                <div className="relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/78 p-6 shadow-md md:bg-white/72 md:shadow-[0_24px_90px_rgba(17,17,17,0.08)] md:backdrop-blur-xl">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111] text-white shadow-sm md:shadow-[0_12px_40px_rgba(17,17,17,0.08)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="relative z-10 mt-8 text-2xl font-black tracking-tight text-[#111]">{feature.title}</h3>
                  <p className="relative z-10 mt-4 leading-7 text-[#111]/58">{feature.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Representative() {
  return (
    <section id="temsilcilik" className="relative overflow-hidden px-5 py-16 text-[#111] sm:px-8 sm:py-20">
      <BackgroundLayer variant="dense" />
      <Reveal y={28}>
        <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-red-500/16 bg-gradient-to-br from-red-600 via-red-700 to-[#300507] p-8 text-white shadow-lg md:p-12 md:shadow-[0_35px_120px_rgba(220,38,38,0.24)] lg:p-16">
          <BackgroundLayer variant="dense" />
          <div className="relative z-10 max-w-4xl">
            <Reveal delay={50} y={12}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white md:backdrop-blur-xl">
                <Users className="h-4 w-4" /> Üniversite Temsilciliği
              </div>
            </Reveal>

            <Reveal delay={100} y={20}>
              <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Kendi üniversitende Unitag temsilcisi ol.
              </h2>
            </Reveal>

            <Reveal delay={150} y={16}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Unitag’ı kampüsünde büyütmek, öğrenci topluluğuna katkı sağlamak ve girişimcilik ekosisteminin bir parçası olmak istiyorsan temsilcilik programına başvurabilirsin.
              </p>
            </Reveal>

            <Reveal delay={210} y={14}>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-50"
              >
                Başvuru Formuna Git <ExternalLink className="h-5 w-5" />
              </a>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Roadmap() {
  const roadmapRef = useRef(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start 78%", "end 62%"],
  });

  const fillProgress = useTransform(scrollYProgress, [0, 1], [0.001, 1]);

  const pathD = isMobile
    ? "M 18 0 C 42 95 6 160 28 250 C 54 360 6 430 28 540 C 54 650 6 720 28 830 C 54 940 8 1000 24 1080"
    : "M 50 0 C 88 95 12 160 50 250 C 88 360 12 430 50 540 C 88 650 12 720 50 830 C 88 940 12 1000 50 1080";

  return (
    <section id="roadmap" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundLayer />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>Yol Haritamız</Kicker>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
              Unitag, öğrenci hayatını adım adım daha kapsamlı hale getiriyor.
            </h2>
          </div>
        </Reveal>

        <div ref={roadmapRef} className="relative mt-14 min-h-[64rem] md:mt-16 md:min-h-[68rem]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 1080"
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="rgba(17,17,17,0.13)"
              strokeWidth={isMobile ? "2.5" : "1.8"}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            <motion.path
              d={pathD}
              fill="none"
              stroke="rgb(220,38,38)"
              strokeWidth={isMobile ? "3" : "2.4"}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : fillProgress }}
            />
          </svg>

          <div className="relative z-10 space-y-10 md:space-y-12">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <Reveal key={item.title} delay={index * 35} y={18}>
                  <article
                    className={cn(
                      "relative flex min-h-[9rem] items-start",
                      isLeft ? "md:justify-start" : "md:justify-end"
                    )}
                  >
                    <div className="absolute left-[calc(18%-1.5rem)] top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-white text-red-600 shadow-[0_12px_40px_rgba(220,38,38,0.12)] md:left-1/2 md:-translate-x-1/2">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div
                      className={cn(
                        "relative z-10 ml-16 w-[calc(100%-4rem)] rounded-[1.8rem] border border-[#111]/10 bg-white/78 p-5 shadow-md md:ml-0 md:w-[42%] md:bg-white/74 md:p-6 md:shadow-[0_25px_90px_rgba(17,17,17,0.08)] md:backdrop-blur-xl",
                        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      )}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_18px_rgba(220,38,38,0.28)]" />
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-red-600">Yakında</span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-[#111]">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[#111]/60">{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="ekip" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundLayer />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>Unitag Ekibi</Kicker>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
              Öğrenci deneyimini daha erişilebilir hale getiren ekip.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 60} y={20}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/78 p-7 shadow-md md:bg-white/74 md:shadow-[0_25px_90px_rgba(17,17,17,0.08)] md:backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
                <h3 className="text-2xl font-black text-[#111]">{person.name}</h3>
                <p className="mt-2 text-sm font-bold text-red-600">{person.role}</p>
                <p className="mt-5 leading-7 text-[#111]/58">{person.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="sss" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundLayer />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div>
            <Kicker>SSS</Kicker>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">Merak edilenler.</h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 35} y={16}>
              <div className="rounded-[1.6rem] border border-[#111]/10 bg-white/78 shadow-md md:bg-white/74 md:shadow-[0_20px_70px_rgba(17,17,17,0.07)] md:backdrop-blur-xl">
                <button
                  onClick={() => setActive(active === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-black text-[#111]">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-[#111]/45 transition",
                      active === index && "rotate-180 text-red-600"
                    )}
                  />
                </button>

                {active === index && <p className="px-6 pb-6 leading-7 text-[#111]/58">{faq.a}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalModal({ activeDoc, onClose, onSwitch }) {
  const doc = activeDoc ? legalDocs[activeDoc] : null;

  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/55 p-4 md:backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-auto flex max-h-[92vh] max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#111]/10 p-5 sm:p-7">
          <div>
            <div className="flex gap-2">
              <button
                onClick={() => onSwitch("kvkk")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold",
                  activeDoc === "kvkk" ? "bg-[#111] text-white" : "bg-[#111]/5 text-[#111]/60"
                )}
              >
                KVKK
              </button>
              <button
                onClick={() => onSwitch("cookie")}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold",
                  activeDoc === "cookie" ? "bg-[#111] text-white" : "bg-[#111]/5 text-[#111]/60"
                )}
              >
                Çerez
              </button>
            </div>
            <h2 className="mt-5 text-2xl font-black text-[#111] sm:text-3xl">{doc.title}</h2>
            <p className="mt-1 text-sm text-[#111]/45">{doc.updated}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl border border-[#111]/10 p-3 text-[#111]/70 transition hover:bg-[#111]/5 hover:text-[#111]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-7">
          <div className="space-y-6">
            {doc.sections.map(([title, body]) => (
              <section key={title}>
                <h3 className="text-lg font-black text-[#111]">{title}</h3>
                <p className="mt-2 whitespace-pre-line leading-8 text-[#111]/60">{body}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieBanner({ openLegal }) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("unitag_cookie_choice");
  });

  const [prefs, setPrefs] = useState(false);

  function acceptAll() {
    localStorage.setItem("unitag_cookie_choice", "all");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("unitag_cookie_choice", "required_only");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-5xl rounded-[2rem] border border-[#111]/10 bg-white/95 p-4 shadow-xl md:p-5 md:shadow-2xl md:backdrop-blur-2xl">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex gap-4">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:flex">
            <Cookie className="h-6 w-6" />
          </div>

          <div>
            <h3 className="font-black text-[#111]">Çerezleri kullanıyoruz</h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-[#111]/58">
              Deneyimi geliştirmek, performansı analiz etmek ve tercihleri hatırlamak için çerezlerden yararlanıyoruz.
              <button
                onClick={() => openLegal("cookie")}
                className="ml-1 font-bold text-red-600 underline underline-offset-4"
              >
                Çerez Politikası
              </button>
            </p>

            {prefs && (
              <div className="mt-4 grid gap-2 text-sm text-[#111]/58 sm:grid-cols-2">
                {["Zorunlu çerezler", "Performans ve analiz", "İşlevsel çerezler", "Reklam ve pazarlama"].map(
                  (x, i) => (
                    <label
                      key={x}
                      className="flex items-center gap-2 rounded-2xl border border-[#111]/10 bg-[#111]/[0.03] px-3 py-2"
                    >
                      <input type="checkbox" defaultChecked={i === 0} disabled={i === 0} className="accent-red-600" />
                      {x}
                    </label>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row lg:justify-end">
          <button
            onClick={() => setPrefs((v) => !v)}
            className="rounded-2xl border border-[#111]/10 px-4 py-3 text-sm font-bold text-[#111]/70 transition hover:bg-[#111]/5"
          >
            Tercihler
          </button>
          <button
            onClick={reject}
            className="rounded-2xl border border-[#111]/10 px-4 py-3 text-sm font-bold text-[#111]/70 transition hover:bg-[#111]/5"
          >
            Reddet
          </button>
          <button
            onClick={acceptAll}
            className="rounded-2xl bg-[#111] px-5 py-3 text-sm font-black text-white transition hover:bg-red-600"
          >
            Tümünü Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer({ openLegal }) {
  return (
    <footer className="relative overflow-hidden border-t border-[#111]/10 px-5 py-12 text-[#111] sm:px-8">
      <BackgroundLayer />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="text-4xl font-black tracking-[-0.08em] text-[#111] sm:text-6xl">Unitag</div>
          <p className="mt-5 max-w-xl leading-7 text-[#111]/58">Unitag'la öğrenci olmak daha kolay.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 font-black text-[#111]">Bağlantılar</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <a href={FORM_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">
                Temsilcilik Formu
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">
                Instagram
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="block hover:text-red-600">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-black text-[#111]">Hukuki</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <button onClick={() => openLegal("kvkk")} className="block text-left hover:text-red-600">
                KVKK Aydınlatma Metni
              </button>
              <button onClick={() => openLegal("cookie")} className="block text-left hover:text-red-600">
                Çerez Politikası
              </button>
              <span className="block text-[#111]/30">Gizlilik Politikası</span>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-black text-[#111]">İletişim</h4>
            <div className="space-y-2 text-sm text-[#111]/58">
              <div>destek@unitagapp.com.tr</div>
              <div>İzmit / Kocaeli</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-[#111]/10 pt-6 text-sm text-[#111]/35">
        © 2026 Unitag. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default function UnitagLandingPage() {
  const [legalOpen, setLegalOpen] = useState(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#111] selection:bg-red-600 selection:text-white">
      <style>{`
        @media (max-width: 767px) {
          .unitag-reveal {
            opacity: 0;
            transform: translate3d(0, var(--unitag-y, 14px), 0);
            transition:
              opacity 300ms ease,
              transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
            transition-delay: var(--unitag-delay, 0ms);
            will-change: opacity, transform;
          }

          .unitag-reveal-visible {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          .unitag-mobile-abstract-base {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at 18% 8%, rgba(220, 38, 38, 0.16), transparent 34%),
              radial-gradient(circle at 86% 18%, rgba(220, 38, 38, 0.10), transparent 32%),
              radial-gradient(circle at 50% 78%, rgba(255, 255, 255, 0.82), transparent 36%),
              linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(254, 242, 242, 0.72), rgba(255, 255, 255, 0.96));
          }

          .unitag-mobile-orbit {
            position: absolute;
            border-radius: 9999px;
            border: 1px solid rgba(220, 38, 38, 0.16);
            transform: translate3d(0, 0, 0);
            will-change: transform, opacity;
          }

          .unitag-mobile-orbit-a {
            width: 23rem;
            height: 9rem;
            left: -7rem;
            top: 5rem;
            transform: rotate(-18deg);
            animation: unitag-mobile-orbit-a 18s ease-in-out infinite;
          }

          .unitag-mobile-orbit-b {
            width: 21rem;
            height: 8rem;
            right: -8rem;
            top: 17rem;
            transform: rotate(18deg);
            border-color: rgba(17, 17, 17, 0.08);
            animation: unitag-mobile-orbit-b 20s ease-in-out infinite;
          }

          .unitag-mobile-orbit-c {
            width: 20rem;
            height: 7rem;
            left: 16%;
            bottom: 4rem;
            transform: rotate(8deg);
            border-color: rgba(220, 38, 38, 0.11);
            animation: unitag-mobile-orbit-c 22s ease-in-out infinite;
          }

          .unitag-mobile-dot {
            position: absolute;
            width: 0.42rem;
            height: 0.42rem;
            border-radius: 9999px;
            background: rgba(220, 38, 38, 0.48);
            box-shadow: 0 0 10px rgba(220, 38, 38, 0.16);
            transform: translate3d(0, 0, 0);
            will-change: transform, opacity;
          }

          .unitag-mobile-dot-a {
            left: 14%;
            top: 18%;
            animation: unitag-mobile-dot-a 7s ease-in-out infinite;
          }

          .unitag-mobile-dot-b {
            right: 18%;
            top: 29%;
            animation: unitag-mobile-dot-b 8s ease-in-out infinite;
          }

          .unitag-mobile-dot-c {
            left: 28%;
            bottom: 20%;
            animation: unitag-mobile-dot-c 9s ease-in-out infinite;
          }

          .unitag-mobile-dot-d {
            right: 24%;
            bottom: 34%;
            animation: unitag-mobile-dot-d 8.5s ease-in-out infinite;
          }

          .unitag-marquee-track {
            animation: unitag-marquee-mobile 26s linear infinite;
            will-change: transform;
            transform: translate3d(-25%, 0, 0);
          }

          @keyframes unitag-marquee-mobile {
            from {
              transform: translate3d(-25%, 0, 0);
            }

            to {
              transform: translate3d(0%, 0, 0);
            }
          }

          @keyframes unitag-mobile-orbit-a {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(-18deg) scale(1);
              opacity: 0.74;
            }

            50% {
              transform: translate3d(1rem, 1.2rem, 0) rotate(-12deg) scale(1.04);
              opacity: 0.48;
            }
          }

          @keyframes unitag-mobile-orbit-b {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(18deg) scale(1);
              opacity: 0.62;
            }

            50% {
              transform: translate3d(-1.1rem, 0.8rem, 0) rotate(12deg) scale(1.03);
              opacity: 0.42;
            }
          }

          @keyframes unitag-mobile-orbit-c {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(8deg) scale(1);
              opacity: 0.58;
            }

            50% {
              transform: translate3d(0.8rem, -0.8rem, 0) rotate(14deg) scale(1.04);
              opacity: 0.38;
            }
          }

          @keyframes unitag-mobile-dot-a {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.45;
            }

            50% {
              transform: translate3d(0.8rem, 1rem, 0) scale(1.35);
              opacity: 0.78;
            }
          }

          @keyframes unitag-mobile-dot-b {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.42;
            }

            50% {
              transform: translate3d(-1rem, 0.8rem, 0) scale(1.3);
              opacity: 0.72;
            }
          }

          @keyframes unitag-mobile-dot-c {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.36;
            }

            50% {
              transform: translate3d(0.9rem, -0.7rem, 0) scale(1.24);
              opacity: 0.66;
            }
          }

          @keyframes unitag-mobile-dot-d {
            0%, 100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.34;
            }

            50% {
              transform: translate3d(-0.7rem, -0.9rem, 0) scale(1.28);
              opacity: 0.64;
            }
          }
        }

        @media (min-width: 768px) {
          .unitag-marquee-track {
            animation: unitag-marquee 34s linear infinite;
            will-change: transform;
            transform: translate3d(-25%, 0, 0);
          }

          @keyframes unitag-marquee {
            from {
              transform: translate3d(-25%, 0, 0);
            }

            to {
              transform: translate3d(0%, 0, 0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .unitag-reveal,
          .unitag-mobile-orbit,
          .unitag-mobile-dot,
          .unitag-marquee-track {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <TopNav />
      <Hero />
      <Marquee items={["indirim", "ikinci el", "ev / oda", "kampüs", "kariyer", "sohbet", "ders notları"]} />
      <Features />
      <Marquee items={["Unitag'la öğrenci olmak daha kolay", "öğrenci fırsatları"]} />
      <Representative />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer openLegal={setLegalOpen} />
      <LegalModal activeDoc={legalOpen} onClose={() => setLegalOpen(null)} onSwitch={setLegalOpen} />
      <CookieBanner openLegal={setLegalOpen} />
    </main>
  );
}