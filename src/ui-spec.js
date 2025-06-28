// ui-spec.js
// Centralized UI configuration for window dimensions and styles
export default {
  home: {
    window: { width: 800, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [80, 0, 20, 0], bg: '#FFFBE3' },
    mainText: { fontSize: '5rem', fontWeight: 'bold', colors: ['#333333', '#32117C'], marginLeft: 0 },
    supportingText: { fontSize: '2rem', fontWeight: 'bold', color: '#333333', marginTop: 20, marginBottom: 100},
    iconGroup: { 
      about: { width: 100, height: 140, margin: 10 },
      work: { width: 100, height: 140, margin: 10 },
      links: { width: 100, height: 140, margin: 10 },
      faq: { width: 100, height: 140, margin: 10 },
      museum: { width: 100, height: 140, margin: 10 },
    },
    icon: { width: 100, height: 100 },
    iconText: { width: 100, height: 40, fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
  },
  about: {
    window: { width: 800, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [20, 0, 0, 40] },
    avatar: { width: 150, height: 150, radius: 75, margin: [20, 20, 20, 60] },
    nameText: { fontSize: '2rem', fontWeight: 'bold', color: '#32117C', margin: [50, 0, 0, 20] },
    quoteText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 20] },
    separator: { offsetLeft: -40, width: 800, borderWidth: 0.5, color: '#979797', opacity: 0.25, margin: [10, 0, 15, 0] },
    content: { 
      normalText: { fontSize: '1rem', color: '#333333', marginLeft: 40},
      heading1: { fontSize: '2rem', color: '#333333' },
    },
  },
  work: {
    window: { width: 1000, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [20, 40, 0, 40] },
    section1: {
      title: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      content: { padding: [20, 20, 40, 20] },
      spacing: { marginBottom: 20 }
    },
    section2: {
      title: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      content: { padding: [20, 20, 40, 20] },
      spacing: { marginBottom: 20 },
      videoSlot: { 
        backgroundColor: '#C4C4C4', 
        borderRadius: 5,
        fontSize: '0.9rem',
        color: '#666666'
      },
      videoGrid: { gap: 40 }
    },
    section3: {
      title: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333', margin: [0, 0, 0, 0] },
      content: { padding: [20, 20, 40, 20] },
      developmentText: { margin: 0, paddingLeft: 20},
      githubLink: { marginTop: 10, fontSize: '1rem', color: '#333333' }
    }
  },
  links: {
    window: { width: 600, height: 400, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 340, padding: [15, 15, 0, 15] },  
    iconGroup: {
      discord: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      instagram: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      telegram: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      linkedin: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      github: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      x: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      whatsapp: { width: 100, height: 120, margin: [0, 20, 10, 20] },
      youtube: { width: 100, height: 120, margin: [0, 20, 10, 20] },
    },
    icons: { width: 80, height: 80 },
    iconText: { width: 100, height: 40, fontSize: '1.25rem', fontWeight: 'bold', color: '#333333' },
    descriptionFrame: { width: 540, height: 40, radius: 5, bg: '#FFFFFF', stroke: 2, strokeColor: '#333333' },
    description: { fontSize: '1rem', color: '#333333' },
  },
  contact: {
    window: { width: 600, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [15, 20, 0, 20] },
    emailTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#333333'},
    character: {},
    descriptionText: {},
    mailText: {},
    mailingFrame: {},
    mailingButton: {},
  },
  faq: {
    window: { width: 600, height: 600, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 540, padding: [20, 0, 0, 20] },
    scrollContainer: { height: 'calc(100% - 40px)', overflowY: 'auto'},
    questionContainer: { 
      width: 540, 
      margin: [0, 0, 10, 0], 
      stroke: 2, 
      radius: 5,
      strokeColor: '#DBDBDB'
    },
    questionHeader: {
      width: 540,
      height: 50,
      padding: [0, 30, 0, 20],
      bg: '#DBDBDB',
      cursor: 'pointer',
      borderRadius: '5px 5px 0 0'
    },
    questionTitle: { 
      fontSize: '1.25rem', 
      fontWeight: 'bold', 
      color: '#333333', 
      margin: [0, 0, 0, 0],
      userSelect: 'none'
    },
    questionContent: { 
      fontSize: '1rem', 
      color: '#333333',
      padding: [15, 20, 15, 20],
      borderRadius: '0 0 5px 5px'
    },
    checkbox: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer'
    }
  },
  museum: {
    window: { width: 1000, height: 800, stroke: 4, bg: '#FFFBE3', radius: 10, overflowHidden: true },
    titleBar: { height: 60, padding: [0, 30, 0, 30], bg: '#FFD992' },
    titleText: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    closeButton: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' },
    contentArea: { height: 740, padding: [15, 20, 0, 20] },
  },
};