import React, { useState } from "react";
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

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(220,38,38,0.10), transparent 42%), radial-gradient(circle at 90% 20%, rgba(220,38,38,0.08), transparent 36%), radial-gradient(circle at 10% 70%, rgba(17,17,17,0.04), transparent 34%)",
        }}
      />
    </div>
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

function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 hidden border-b border-[#111]/8 bg-white/80 md:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-8">
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[#111]/55 transition hover:text-red-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-16 text-[#111] sm:px-8 sm:pb-12 sm:pt-28 lg:pt-32"
    >
      <BackgroundGlow />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center sm:min-h-[calc(100svh-7rem)]">
        <div className="w-full max-w-4xl text-center lg:text-left">
          <h1 className="mx-auto max-w-4xl text-[3.35rem] font-black leading-[0.88] tracking-[-0.075em] text-[#111] sm:text-6xl sm:leading-[0.9] lg:mx-0 lg:text-7xl xl:text-8xl">
            Unitag'la öğrenci olmak daha kolay
          </h1>

          <p className="mx-auto mt-6 max-w-[21rem] text-[1.05rem] leading-7 text-[#111]/62 sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-8 lg:mx-0">
            Öğrenci indirimleri, ikinci el ilanlar, ev/oda/yurt seçenekleri ve kampüs fırsatları tek platformda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={APP_STORE_URL}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#111] px-6 py-4 text-base font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-600"
            >
              <Apple className="h-5 w-5" />
              App Store'dan İndir
            </a>

            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-white/90 px-6 py-4 text-base font-black text-red-700 shadow-sm transition hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-50"
            >
              Üniversite Temsilcisi Ol
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items }) {
  return (
    <div className="overflow-hidden border-y border-[#111]/10 bg-[#111] py-4 text-white">
      <div className="flex gap-4 overflow-hidden px-5 text-2xl font-black uppercase tracking-[-0.05em] md:unitag-marquee-track md:w-max md:gap-8 md:whitespace-nowrap md:text-6xl">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="shrink-0">
            {item}
            <span className="ml-4 hidden h-3 w-3 rounded-full bg-red-500 md:inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="ozellikler" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Unitag’da neler var?</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            Öğrencinin şehirde ihtiyacı olan her şey tek platformda.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/82 p-6 shadow-md md:bg-white/76 md:shadow-[0_24px_90px_rgba(17,17,17,0.08)]"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111] text-white shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative z-10 mt-8 text-2xl font-black tracking-tight text-[#111]">
                  {feature.title}
                </h3>
                <p className="relative z-10 mt-4 leading-7 text-[#111]/58">{feature.text}</p>
              </div>
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
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-red-500/16 bg-gradient-to-br from-red-600 via-red-700 to-[#300507] p-8 text-white shadow-lg md:p-12 md:shadow-[0_35px_120px_rgba(220,38,38,0.24)] lg:p-16">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
            <Users className="h-4 w-4" />
            Üniversite Temsilciliği
          </div>

          <h2 className="mt-8 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Kendi üniversitende Unitag temsilcisi ol.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Unitag’ı kampüsünde büyütmek, öğrenci topluluğuna katkı sağlamak ve girişimcilik ekosisteminin bir parçası
            olmak istiyorsan temsilcilik programına başvurabilirsin.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-red-700 transition hover:-translate-y-0.5 hover:bg-red-50"
          >
            Başvuru Formuna Git
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Yol Haritamız</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            Unitag, öğrenci hayatını adım adım daha kapsamlı hale getiriyor.
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {roadmap.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="grid gap-5 rounded-[1.8rem] border border-[#111]/10 bg-white/82 p-5 text-[#111] shadow-md md:bg-white/76 md:shadow-[0_25px_90px_rgba(17,17,17,0.08)] sm:p-6 md:grid-cols-[90px_1fr_1.25fr] md:items-center"
              >
                <div className="text-3xl font-black text-red-600">0{index + 1}</div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-500/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-[#111] sm:text-2xl">{item.title}</h3>
                </div>
                <p className="leading-7 text-[#111]/60">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="ekip" className="relative overflow-hidden px-5 py-20 text-[#111] sm:px-8 sm:py-24">
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Kicker>Unitag Ekibi</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">
            Öğrenci deneyimini daha erişilebilir hale getiren ekip.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="group relative overflow-hidden rounded-[2rem] border border-[#111]/10 bg-white/82 p-7 shadow-md md:bg-white/76 md:shadow-[0_25px_90px_rgba(17,17,17,0.08)]"
            >
              <div className="mb-8 h-1.5 w-16 rounded-full bg-red-500" />
              <h3 className="text-2xl font-black text-[#111]">{person.name}</h3>
              <p className="mt-2 text-sm font-bold text-red-600">{person.role}</p>
              <p className="mt-5 leading-7 text-[#111]/58">{person.focus}</p>
            </div>
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
      <BackgroundGlow />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Kicker>SSS</Kicker>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.05em] text-[#111] sm:text-6xl">Merak edilenler.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="rounded-[1.6rem] border border-[#111]/10 bg-white/82 shadow-md md:bg-white/76 md:shadow-[0_20px_70px_rgba(17,17,17,0.07)]"
            >
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
    <div className="fixed inset-0 z-[100] bg-black/55 p-4" onClick={onClose}>
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
    <div className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-5xl rounded-[2rem] border border-[#111]/10 bg-white/95 p-4 shadow-xl md:p-5 md:shadow-2xl">
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
      <BackgroundGlow />

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
        @media (min-width: 768px) {
          .unitag-marquee-track {
            animation: unitag-marquee 34s linear infinite;
          }

          @keyframes unitag-marquee {
            from {
              transform: translateX(-33.333%);
            }

            to {
              transform: translateX(0%);
            }
          }
        }
      `}</style>

      <TopNav />
      <Hero />
      <Marquee items={["indirim", "ikinci el", "ev / oda", "kampüs", "kariyer", "sohbet", "ders notları"]} />
      <Features />
      <Marquee items={["Unitag'la öğrenci olmak daha kolay", "kampüste büyüyen platform", "öğrenci fırsatları"]} />
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