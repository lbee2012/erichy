// ui-spec.js
// Centralized UI configuration for window dimensions and styles
export default {
  home: { // Main desktop interface
    // Window configuration
    window: { width: 800, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [80, 0, 20, 0], bg: '#FFFBE3' },
    
    // Typography styles
    mainText: { fontSize: '5rem', fontWeight: 'bold', colors: ['#333333', '#32117C'], marginLeft: 0 },
    supportingText: { fontSize: '2rem', fontWeight: 'bold', color: '#333333', marginTop: 20, marginBottom: 100},
    
    // Navigation icons
    navigationIcons: { 
      aboutIcon: { width: 100, height: 140, margin: 10, source: "/sources/ico/home/about.webp" },
      workIcon: { width: 100, height: 140, margin: 10, source: "/sources/ico/home/work.webp" },
      linksIcon: { width: 100, height: 140, margin: 10, source: "/sources/ico/home/links.webp" },
      faqIcon: { width: 100, height: 140, margin: 10, source: "/sources/ico/home/faq.webp" },
      museumIcon: { width: 100, height: 140, margin: 10, source: "/sources/ico/home/museum.webp" },
    },
    iconImage: { width: 100, height: 100 },
    iconLabel: { width: 100, height: 40, fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
  },
  about: { // Personal information and biography
    // Window configuration
    window: { width: 800, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [20, 40, 0, 40] },
    
    // Profile section
    profileImage: { width: 150, height: 150, radius: 75, margin: [20, 20, 20, 60], source: "/sources/img/about/cn_mel.webp" },
    profileName: { fontSize: '2rem', fontWeight: 'bold', color: '#32117C', margin: [50, 0, 0, 20] },
    profileQuote: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 20] },
    
    // Layout elements
    divider: { offsetLeft: -40, width: 800, borderWidth: 0.5, color: '#979797', opacity: 0.25, margin: [10, 0, 15, 0] },
    
    // Content typography
    textStyles: { 
      bodyText: { fontSize: '1rem', color: '#333333', marginLeft: 40},
      headingText: { fontSize: '2rem', color: '#333333' },
    },
  },
  work: { // Portfolio and professional work showcase
    // Window configuration
    window: { width: 1000, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [20, 40, 0, 40] },
    
    arch: { // Dotfiles section (renamed from intro)
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      contentArea: { padding: [20, 20, 40, 20] },
      spacing: { marginBottom: 20 },
    },
    
    aep: { // After Effects Projects section (renamed from portfolio)
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      contentArea: { padding: [20, 20, 40, 20] },
      spacing: { marginBottom: 20 },
      
      // Video placeholder styles
      videoPlaceholder: { 
        backgroundColor: '#DBDBDB', 
        borderRadius: 5,
        fontSize: '1rem',
        color: '#333333',
      },
      videoGrid: { gap: 20 },
      
      // Individual video configurations
      videoItems: {
        video1: { width: 430, height: 242, showDimensions: false, source: "/sources/vid/work/snhat.mp4" },  // horizontal 16:9
        video2: { width: 430, height: 242, showDimensions: false, source: "/sources/vid/work/galazy.mp4" }, // horizontal 16:9
        video3: { width: 253, height: 450, showDimensions: false, source: "/sources/vid/work/cube.mp4" }, // vertical 9:16
        video4: { width: 338, height: 450, showDimensions: false, source: "/sources/vid/work/unlockit.mp4" },  // vertical 3:4
        video5: { width: 253, height: 450, showDimensions: false, source: "/sources/vid/work/acye.mp4" },  // vertical 9:16
      },
      
      // Video playback settings - updated per request
      playbackSettings: {
        autoplay: false,        // No auto play
        muted: true,           // Muted at first
        loop: false,           // Non-loop, play again when user decides
        controls: true,        // Default control system enabled
        preload: 'metadata',
        objectFit: 'cover'     // or 'contain', 'fill',
      }
    },
    
    development: { // Development information section - keep it up!
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      contentArea: { padding: [20, 20, 40, 20] },
      descriptionText: { margin: 0, paddingLeft: 20},
      repositoryLink: { marginTop: 10, fontSize: '1rem', color: '#333333' },
    }
  },
  links: { // Social media and contact links
    // Window configuration
    window: { width: 600, height: 400, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 340, padding: [10, 20, 0, 20] },  
    
    // Social platform icons (renamed from socialPlatforms to groupLinks)
    groupLinks: {
      discord: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/discord.webp", url: "https://discord.com" },
      instagram: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/instagram.webp", url: "https://instagram.com" },
      telegram: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/telegram.webp", url: "https://telegram.org" },
      linkedin: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/linkedin.webp", url: "https://linkedin.com" },
      github: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/github.webp", url: "https://github.com" },
      twitter: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/x.webp", url: "https://twitter.com" },
      whatsapp: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/whatsapp.webp", url: "https://whatsapp.com" },
      youtube: { width: 100, height: 120, margin: [0, 10, 10, 10], source: "/sources/ico/links/youtube.webp", url: "https://youtube.com" },
    },
    
    // Icon styling (renamed from iconImage to groupIcon, iconLabel to groupLabel)
    groupIcon: { width: 80, height: 80 },
    groupLabel: { width: 100, height: 40, fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
    
    // Description area
    descriptionContainer: { width: 540, height: 40, radius: 5, bg: '#FFFFFF', stroke: 2, strokeColor: '#333333' },
    descriptionText: { fontSize: '1rem', color: '#333333' },
  },
  contact: { // Contact form and information
    // Window configuration
    window: { width: 600, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [15, 20, 0, 20] },
    
    // Email section
    emailTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333'},
    
    // Contact elements (to be implemented)
    characterImage: { width: 150, height: 150, borderRadius: 75 },
    descriptionText: { fontSize: '1rem', color: '#333333', lineHeight: 1.5 },
    emailText: { fontSize: '1.1rem', fontWeight: 'bold', color: '#32117C' },
    
    // Form elements
    contactForm: { 
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      border: '2px solid #DBDBDB'
    },
    submitButton: { 
      backgroundColor: '#FFD992',
      color: '#333333',
      fontSize: '1rem',
      fontWeight: 'bold',
      padding: [10, 20],
      borderRadius: 5,
      border: '2px solid #333333',
      cursor: 'pointer'
    },
  },
  faq: { // Frequently asked questions
    // Window configuration
    window: { width: 600, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [0, 20, 0, 20] }, // Right padding = 0 for scroll alignment
    
    // Scroll container
    scrollableArea: { height: 'calc(100% - 0px)', overflowY: 'auto'},
    
    // Expand arrow icon
    expandIcon: { 
      source: "/sources/ico/faq/arrow.webp", 
      width: 16, 
      height: 16, 
      fontSize: '1rem',
      color: '#333333' 
    },
    
    // Question item styling
    questionItem: { 
      backgroundColor: '#DBDBDB',
      margin: [20, 0, 20, 0], // Reduced right margin for scroll alignment
      padding: [17, 20, 17, 20], 
      borderRadius: 5,
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#333333'
    },
    
    // Answer styling - sticks to question with border
    questionAnswer: { 
      backgroundColor: '#FFFBE3',
      margin: [-20, 0, 20, 0],
      padding: [15, 20, 15, 20],
      border: '2px solid #DBDBDB', // Same color as question background
      borderTop: 'none', // No top border to connect with question
      borderRadius: '0 0 5px 5px', // Only bottom corners rounded
      fontSize: '1rem', 
      color: '#333333',
    },
    
    // Interaction elements
    toggleCheckbox: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
    }
  },
  museum: {
    // Museum window configuration
    window: { width: 1000, height: 800, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 740, padding: [20, 40, 20, 40] },
    
    // Global section styles
    sectionTitle: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
    sectionSubTitle: { fontSize: '0.75rem', fontWeight: 'normal', color: '#333333', margin: [0, 0, 0, 20] },
    sectionContent: { margin: [20, 20, 40, 20] },
    
    // Modal/Zoom overlay styles
    modalOverlay: { 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'rgba(0, 0, 0, 0.85)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 1000,
      cursor: 'zoom-out'
    },
    modalContent: { 
      maxWidth: '90vw', 
      maxHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      cursor: 'zoom-out'
    },
    modalImage: { 
      width: 'auto', 
      height: '60vh', 
      objectFit: 'contain', 
      borderRadius: 10,
      marginBottom: 20,
      cursor: 'zoom-out'
    },
    modalDescription: { 
      backgroundColor: '#FFFBE3', 
      padding: 20, 
      borderRadius: 10, 
      maxWidth: 900, 
      fontSize: '1rem', 
      color: '#333333', 
      lineHeight: 1.5,
      whiteSpace: 'pre-line'
    },
    
    books: { // Section 1 - J.V.Scholz recommendations
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
      itemImage: { width: 300, height: 225, radius: 10 },
      item1: { source: "/sources/img/museum/book/atomic_habits.webp" },
      item2: { source: "/sources/img/museum/book/deep_work.webp" },
      itemDescription: { fontSize: '1rem', fontWeight: 'normal', color: '#333333', marginSide: 40 },
      itemFrame1: { width: 880, height: 225, marginBottom: 40 },
      itemFrame2: { width: 880, height: 225 },
    },
    
    techs: { // Section 2 - Technology devices collection
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
      deviceImage: { width: 205, height: 205, spacing: 20, borderRadius: 10, backgroundColor: '#DBDBDB', cursor: 'zoom-in' },
      device1: { source: "/sources/img/museum/tech/ipad_gen_1st.webp" },
      device2: { source: "/sources/img/museum/tech/ipad_gen_8th.webp" },
      device3: { source: "/sources/img/museum/tech/ipad_air_4.webp" },
      device4: { source: "/sources/img/museum/tech/ipad_air_5.webp" },
      device5: { source: "/sources/img/museum/tech/acer_nitro_5.webp" },
      device6: { source: "/sources/img/museum/tech/attack_shark_x3.webp" },
      device7: { source: "/sources/img/museum/tech/za68_pro.webp" },
      device8: { source: "/sources/img/museum/tech/moondrop_space_travel.webp" },
      device9: { source: "/sources/img/museum/tech/hyperone_gen_2_with_silentium.webp" },
      device10: { source: "/sources/img/museum/tech/logitech_m575s.webp" },
      device11: { source: "/sources/img/museum/tech/seiko_watch.webp" },
      device12: { source: "/sources/img/museum/tech/asus_vivobook_x509fa.webp" },
      device13: { source: "/sources/img/museum/tech/logitech_cordless_trackman_wheel.webp" },
      device14: { source: "/sources/img/museum/tech/protoarc_em01_white_rgb-ring.webp" },
      device15: { source: "/sources/img/museum/tech/hhkb_pro_hybrid_type-s_snow.webp" },
      device16: { source: "/sources/img/museum/tech/lg_23ea63.webp" },
    },
    
    diy: { // Section 3 - DIY projects and creations
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
    },
    
    achievements: { // Section 4 - Gaming achievements from childhood
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
      gameFrame1: { width: 880, height: 225, marginBottom: 40},
      gameFrame2: { width: 880, height: 208 },
      gameImage1: { width: 300, height: 225, borderRadius: 10, source: "/sources/img/museum/game/free_fire.webp" },
      gameImage2: { width: 300, height: 208, borderRadius: 10, source: "/sources/img/museum/game/arena_of_valor.webp" },
      gameTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [20, 0, 5, 40] },
      gameDescription: { fontSize: '1rem', fontWeight: 'normal', color: '#333333', margin: [5, 0, 0, 40] },
    },
    
    inspirations: { // Section 5 - Evelyn's inspirational content
      sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
    },
  },
};
