
const ItVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Data Science Full Course',
        desc: 'Learn Data Science in 10 Hours | Data Science For Beginners',
        urlToImg: 'https://i.ytimg.com/vi/-ETQ97mXXF0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJFiZ64-0zo27zHA_rYsvBxaeHCw',
        url: "https://www.youtube.com/embed/-ETQ97mXXF0"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Python Course For Absolute Beginners',
        desc: 'This is one of the most-watched courses. If you want to create projects as early as possible, then this course is for you.',
        urlToImg: 'https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/45f2c8ae4ba61cbf76d8f6d64c182359.png',
        url: "https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Master in React js',
        desc: 'Learn Fundamentals,Context API,Hooks,React Router,Custom Hooks',
        urlToImg: 'https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA',
        url: 'https://www.youtube.com/embed/4UZrsTqkcW4'
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Web Development Course',
        desc: ' Web Development Course fo Beginners.Learn HTML and CSS from Scratch-Full Course',
        urlToImg: 'https://i.ytimg.com/vi/TdqQqyc7pfU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8frIjCsMqeFLUufXqU93zNC2YXg',
        url: 'https://www.youtube.com/embed/mU6anWqZJcc'
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'JavaScript Programming',
        desc: 'This complete JavaScript Course will Teach You Everything you need to know to get started with this Course',
        urlToImg: 'https://i.ytimg.com/vi/jS4aFq5-91M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyZZs-s_Ss0ahCRGI0C6KzVMwPgg',
        url: 'https://www.youtube.com/embed/PkZNo7MFNFg'
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Node.Js and Express.Js Full Course',
        desc: 'You will see everything you need to know about Node.js. This node js tutorial will cover everything you will ever need to learn about Node.',
        urlToImg: 'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgCDSpAmDl1IAEM1sfyLP7oQ8g2g',
        url: 'https://www.youtube.com/embed/Oe421EPjeBE'
    },
    {
        id: '1.6',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Python Django Course For ',
        desc: '  Learn Django from Scratch in this 100% Free & Tutorial!',
        urlToImg: 'https://i.ytimg.com/vi/t7DrJqcUviA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK11WxUS1DYTsE9VmCloellRpe0A',
        url: 'https://www.youtube.com/embed/L3ZzkOTDins'
    },
    {
        id: '1.7',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Computer Networking Full Course',
        desc: 'Full Tutorial From Beginners to Expert[Hindi]',
        urlToImg: 'https://i.ytimg.com/vi/L3ZzkOTDins/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUfOf35LIPiDEE7vXhFtyWlDBVeg',
        url: 'https://www.youtube.com/embed/L3ZzkOTDins'
    },
    {
        id: '1.8',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Fundamentals Of IT',
        desc: 'You can Learn Complete IT Course in this Video, IT Course For Beginners',
        urlToImg: 'https://i.ytimg.com/vi/awLnur5Yt9o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5viW6DQw5CE70BfiweddXemmjCQ',
        url: 'https://www.youtube.com/embed/awLnur5Yt9o'
    },
    {
        id: '1.9',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'BlockChain Full Course',
        desc: 'BlockChain 6 Hours Course,3 Courses in 1 [Hindi]',
        urlToImg: 'https://i.ytimg.com/vi/6aF6p2VUORE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzng4-3KUSeC3c7gHDCXKivGRpug',
        url: 'https://www.youtube.com/embed/6aF6p2VUORE'
    },
    {
        id: '1.10',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'CCNA Full Course',
        desc: 'You will get to learn CCNA in hindi. we have provided you the CCNA course that too from scratch',
        urlToImg: 'https://i.ytimg.com/vi/2mvn4eOOVZo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmXIcE9NL1kmSyM6vjqG3heZuC0Q',
        url: 'https://www.youtube.com/embed/2mvn4eOOVZo'
    },
    {
        id: '1.11',
        courseType: 'Certificate',
        courseCategory: 'IT',
        title: 'Cyber Security Full Course',
        desc: 'In this complete cyber security course you will everything you need in order to understange cyber security',
        urlToImg: 'https://i.ytimg.com/vi/U_P23SqJaDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFg5IHD63JarWslqqIYWqFSFtQzA',
        url: 'https://www.youtube.com/embed/U_P23SqJaDc'
    },
]

const LanguageVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'Chinese Language for Beginners',
        desc: 'HSK level 1. Basic Chinese Course for your improvement in Chinese',
        urlToImg: 'https://i.ytimg.com/vi/McZW0iDsZns/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAnMAL3rfM0k_MElsLn1La2rqSEfQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLWXyZU_NJb_chvMZ13hgOPB3Vcz7xhW3q"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'Learn German Language Full Course',
        desc: 'Learn German for A1. Learn in a quick, easy and in a well explained method - online for free!',
        urlToImg: 'https://i.ytimg.com/vi/6Ka_3Rq8JZ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCML_2uxupSnUPX01WhC8OyUfNAbQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'Business English Course',
        desc: `Learn business English for your job with Business English Pod's popular lessons for English learners.`,
        urlToImg: 'https://i.ytimg.com/vi/e7n2K5gR-rk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBri3IiH6gx0EFMkMWUkAGFcXT8sw',
        url: "https://www.youtube.com/embed/videoseries?list=PLxSz4mPLHWDb5ilkSD089gY2UwKiP72S7"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'Learn Swedish Language Course',
        desc: 'Learn Swedish, English-Swedish, Engelska Svenska, Common Questions',
        urlToImg: 'https://i.ytimg.com/vi/aj_T5p-K9YU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQrdfpeqgw60fnu_9xyFpsM0vtlg',
        url: 'https://www.youtube.com/embed/mZ6oalol_hs'
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'English Pronounciation Course for Beginners',
        desc: 'This lesson provides you a comprehensive easy-understand approach to English Pronunciation.',
        urlToImg: 'https://i.ytimg.com/vi/8oJzRdqstkA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZTv5KfoVADwvnPjLEYETMRYfucw',
        url: "https://www.youtube.com/embed/videoseries?list=PL2IkMHFHWdEpVXEVB3PzzNIDBQt6SwziE"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Language',
        title: 'English Writing Courses',
        desc: `Through this course you'll get skills and strategies that will help you in your academic career`,
        urlToImg: 'https://i.ytimg.com/vi/rIZ1vuk_c5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdjrqtvpuyoqvMgxXI0z2Bjsq_rg',
        url: "https://www.youtube.com/embed/videoseries?list=PLD6t6ckHsrubRV7Wb42ggOhVNrBRAte13"
    }
]

const SalesMarketingVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Entrepreneurship Full Course',
        desc: 'Learn Entrepreneurship to be grown up a successful business person.This will helps you become a Entrepreneur',
        urlToImg: 'https://i.ytimg.com/vi/7bMpgBuoZY0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2E4e-Ygzr0wUF8OZ1y2uceTjUxQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLH2l6uzC4UEVY8arV3ExtMVamFxTzMtZ4"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Content Marketing Full Course',
        desc: 'How business are taking advantage of Content Marketing.Complete info about content marketing.',
        urlToImg: 'https://i.ytimg.com/vi/gzanfUj8b4A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_R0FvNtqFO3Ap5kM2pUGz9_jYCw',
        url: "https://www.youtube.com/embed/WC9LTbAEJUc"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Digital Marketing Full Course',
        desc: `This course is based on Digital Marketing basics to advanced fundamentals will helps you to get knowledge of Digital platforms.`,
        urlToImg: 'https://i.ytimg.com/vi/RNh8VHc8qkk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYGHYWg2Wp8k59UOt5K_8gtOqIXA',
        url: "https://www.youtube.com/embed/G6DmDqYLWL8"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Programmatic Advertisement Full Course',
        desc: 'If you want to learn Programmatic Advertising in details, this course is for you.',
        urlToImg: 'https://i.ytimg.com/vi/Ni8Y477YQ10/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDSUZWl2KLYwQRS5_U1As0QdoeMhQ',
        url: 'https://www.youtube.com/embed/videoseries?list=PLv6KfiLx9P_2nXceTVMkv_92HIogxj13P'
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Affiliate Marketing Complete Course',
        desc: 'Learn how to start affiliate marketing which will help you make money online and make money as commission or service.',
        urlToImg: 'https://i.ytimg.com/vi/PvHi3Dk91Jw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQ1Pz9FAf2MZku1p400PL81TAuGQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLjVLYmrlmjGfHz5EOdNzeIgIHUYlB7_Fq"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Sales & Marketing',
        title: 'Complete Google Ads Course',
        desc: ` learn about different types of ads, structure, ad groups, keyword research, bidding strategy.`,
        urlToImg: 'https://i.ytimg.com/vi/FuOmpoZjZ2s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyf2fjqEEJ_NTvazXTbTvM55MriQ',
        url: "https://www.youtube.com/embed/FuOmpoZjZ2s"
    }
]

const ManagementVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Auditing CA Inter Full Course',
        desc: 'This course contains auditing course and auditing lectures which helps students taking graduate in audit.',
        urlToImg: 'https://i.ytimg.com/vi/7yhm7Fo0dlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAceW9ywFO_FgWXGYXD0LM1d8zO7g',
        url: "https://www.youtube.com/embed/videoseries?list=PLVE_dFhGA23yR5MZE5MR7hcvU37molWpc"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Full Financial Accounting Course',
        desc: 'Through this learn fianancial accounting to help you to learn accounting basic to advance.',
        urlToImg: 'https://i.ytimg.com/vi/juh6jW2eaaI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIkFKwqCpSbqVCtPPIHk3RMxXDtw',
        url: "https://www.youtube.com/embed/videoseries?list=PLTzX3SfK4zG5oeVvYjug-GmZ0l5Phf2hy"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Occupational Health & Safety Course',
        desc: 'This course provides you awareness about health & safety established by OSHA,EPA.',
        urlToImg: 'https://i.ytimg.com/vi/N6MTFVaTw-0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9i3ZZLJTGH6qQcZy8yzS28kyt5Q',
        url: "https://www.youtube.com/embed/videoseries?list=PLc7bi6FgPBK8X0t2ZrNHwauY8N2HOefTM"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Human Resource Management',
        desc: 'Learn free Human Resource (HR) online courses with certificates.',
        urlToImg: 'https://i.ytimg.com/vi/aA1OlFHZWtU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEJUpy4dW9baqs8cN3awUsxLcazw',
        url: "https://www.youtube.com/embed/videoseries?list=PLzZU3n3mx6kfJrIXC1bGBONMlNMaTaOcD"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Business Economics Full Course',
        desc: 'Important Economics topic you must prepare for SSC and CGL exam.including all economic morals.',
        urlToImg: 'https://i.ytimg.com/vi/U4Zlnd50Ato/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBivYOQzecr926ie5nE074UnXdKGQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLWEdFX-t6_I6onPxsVg-nc6aGDwTLcn34"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Investment Banking Full Course',
        desc: 'This comprehensive course of investment banking covers services provided in investment banking and corporate finance, gives you a competitive edge',
        urlToImg: 'https://i.ytimg.com/vi/l_w23-JwlFA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3lHzV4LK8HWPJEKXQaGHHE68VRQ',
        url: "https://www.youtube.com/embed/l_w23-JwlFA"
    },
    {
        id: '1.6',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Fundamentals of Manufacturing Process',
        desc: 'In this course, understanding manufacturing,Fundamentals approaches of manufacturing',
        urlToImg: 'https://i.ytimg.com/vi/jdFrBtHeJbs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAbccnelGXTm9fE-Vw6BbsciGYXlg',
        url: "https://www.youtube.com/embed/videoseries?list=PLSGws_74K01-g9nnTMBssGURHawYYQfMQ"
    },
    {
        id: '1.7',
        courseType: 'Certificate',
        courseCategory: 'Management',
        title: 'Hospitality Management Studies',
        desc: 'Hospitality management-hotel operations,perspective on careers in hospitality',
        urlToImg: 'https://i.ytimg.com/vi/lqIRm5DMuf4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1F7jF7LFvq0rkqVdozZny0q6x4Q',
        url: "https://www.youtube.com/embed/videoseries?list=PLWPirh4EWFpGQQG8TT6qC5A_S29f9OMt7"
    }
]

const HealthVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Nursing Studies',
        desc: 'Nursing officer and staff nurse online classes.female reproductive system',
        urlToImg: 'https://i.ytimg.com/vi/mU05pROzW6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbmuilsoAQOAS-SBYutiPaxlUahQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLjwNOS1Xzt6A2nWT01oT5VkvXGrA7n9Jj"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Physical Therapy Assistant Skills',
        desc: 'See the course to know how physical therapy needs to human beings.',
        urlToImg: 'https://i.ytimg.com/vi/dFpVHc5vtSY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAbb_mZwfh0PKlwFH3009_xbSBmg',
        url: "https://www.youtube.com/embed/gcX6YjkDpCk"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Mental Health Awareness studies',
        desc: 'integrative behavioral health approaches including counseling techniques and skills for improving mental health and reducing mental illnes.',
        urlToImg: 'https://i.ytimg.com/vi/FoZ-3l6hMGQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClM84NYgXCHleoFQrkUEZDGOaueg',
        url: "https://www.youtube.com/embed/FoZ-3l6hMGQ"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Nutritions With Healthy Aging',
        desc: 'Learn about importance of balanced diet and nutrition to stay healthy',
        urlToImg: 'https://i.ytimg.com/vi/g98qf2_7VE8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBos-7gTXcp0brrQ2gsz3Efid0tow',
        url: "https://www.youtube.com/embed/krIgKr3IC7s"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: ' Advance Trauma Life Support Course',
        desc: 'Know all About Diploma in Diploma in Emergency and Trauma Care course, eligibility, fee, admission, and scope after course.',
        urlToImg: 'https://i.ytimg.com/vi/5_UD36xPi8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClHSAeUVOZHULG_WqpJFnEBE8Nfg',
        url: "https://www.youtube.com/embed/Jl4lbowHazs"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Basic First Aid Studies',
        desc: 'This online course will help you gain sufficient awareness of first aid but does not replace competency-based.',
        urlToImg: 'https://i.ytimg.com/vi/ErxKDbH-iiI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNxP40-LCRB2Tt_LbZmomFF_n_QQ',
        url: "https://www.youtube.com/embed/ErxKDbH-iiI"
    },
    {
        id: '1.6',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Food Safety and Hygiene',
        desc: 'In this you can learn about food safety and hygiene everyday we need.',
        urlToImg: 'https://i.ytimg.com/vi/WH6m2Hv1LC0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4mscBP52Ib14Yyx3rePcO7qQjDw',
        url: "https://www.youtube.com/embed/zIaA7WDJOIs"
    },
    {
        id: '1.7',
        courseType: 'Certificate',
        courseCategory: 'Health',
        title: 'Pharmacology Full Course',
        desc: 'In this course all the videos of Pharmacology with detailed teaching and integration with  medicine',
        urlToImg: 'https://i.ytimg.com/vi/7nVM-IvKJW4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC1kkEnVvOyAc6O9k4-ZZ9CDcjnTA',
        url: "https://www.youtube.com/embed/videoseries?list=PLanhHan1upzVB6wWsuhcvZrYVz-i88mil"
    }
]

const BusinessVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'E-Commerce Management Complete Course',
        desc: 'Here you learn E-commerce step by step guide to start online an business.complete process of e-commerce',
        urlToImg: 'https://i.ytimg.com/vi/1Q3mdtFgK3Q/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC-bQwGqy4AyUaGOYkiIJyj5MJ5-A',
        url: "https://www.youtube.com/embed/videoseries?list=PLuDaS_qIKeXFRL7Aov4K_oZRSKslLqUdg"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Project Management Full Course',
        desc: `By this course, you'll have everything you need to know about Project Management.So without further ado, let's jump in!`,
        urlToImg: 'https://i.ytimg.com/vi/uWPIsaYpY7U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfjGrJHcN5Od_5kjbWKoRHYbRvfQ',
        url: "https://www.youtube.com/embed/uWPIsaYpY7U"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Sales Management Full Course',
        desc: 'Know about sales management is a business discipline which is focused on the practical application of sales techniques.',
        urlToImg: 'https://i.ytimg.com/vi/Xwyz16Uk_U0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA97PW0nA6qtl0StrbXqrjHC5hFvQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLJtJvO3aaWe1yiRvTkNDhV9lUDSHWeWxM"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Occupational Health & Safety Course',
        desc: 'This course provides you awareness about health & safety established by OSHA,EPA.',
        urlToImg: 'https://i.ytimg.com/vi/N6MTFVaTw-0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9i3ZZLJTGH6qQcZy8yzS28kyt5Q',
        url: "https://www.youtube.com/embed/videoseries?list=PLc7bi6FgPBK8X0t2ZrNHwauY8N2HOefTM"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Auditing CA Inter Full Course',
        desc: 'This course contains auditing course and auditing lectures which helps students taking graduate in audit.',
        urlToImg: 'https://i.ytimg.com/vi/7yhm7Fo0dlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAceW9ywFO_FgWXGYXD0LM1d8zO7g',
        url: "https://www.youtube.com/embed/videoseries?list=PLVE_dFhGA23yR5MZE5MR7hcvU37molWpc"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Full Financial Accounting Course',
        desc: 'Through this learn fianancial accounting to help you to learn accounting basic to advance.',
        urlToImg: 'https://i.ytimg.com/vi/juh6jW2eaaI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIkFKwqCpSbqVCtPPIHk3RMxXDtw',
        url: "https://www.youtube.com/embed/videoseries?list=PLTzX3SfK4zG5oeVvYjug-GmZ0l5Phf2hy"
    },
    {
        id: '1.6',
        courseType: 'Certificate',
        courseCategory: 'Business',
        title: 'Fundamentals of Manufacturing Process',
        desc: 'In this course, understanding manufacturing,Fundamentals approaches of manufacturing',
        urlToImg: 'https://i.ytimg.com/vi/jdFrBtHeJbs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAbccnelGXTm9fE-Vw6BbsciGYXlg',
        url: "https://www.youtube.com/embed/videoseries?list=PLSGws_74K01-g9nnTMBssGURHawYYQfMQ"
    }
]

const EngineeringVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Electrical Engineering Course',
        desc: 'we will address some electrical engineering courses through this.By learning these courses you will expand your electrical engineering knowledge for sure.',
        urlToImg: 'https://i.ytimg.com/vi/SxG3PNsiKnY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApjQBL9QXn1GrTcvEwXKj_gxsdlw',
        url: "https://www.youtube.com/embed/videoseries?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Mechanical Engineering Course',
        desc: 'In this Fundamentals of Mechanical Engineering with cam and follower mechanism in engine',
        urlToImg: 'https://i.ytimg.com/vi/ehi_hkLlutw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCr0_FXRzOUEX2QPhhdeSo6AwO2eA',
        url: "https://www.youtube.com/embed/videoseries?list=PLt_gyY3ZHcxEKUW1s2zyXW_fqxzkiPDm8"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Quality Management System & Certification',
        desc: 'This course will provide you with the knowledge and skills to implement and improve the more technical aspects of a quality management system',
        urlToImg: 'https://i.ytimg.com/vi/YNW2zAetDhQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJtTF6J3NL50RAxGb0ziCsm09icA',
        url: "https://www.youtube.com/embed/YNW2zAetDhQ"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Civil Engineering Course With Certification',
        desc: '.In this session Gradeup Expert will discuss RCC, which is an important Civil Engineering Topic. ',
        urlToImg: 'https://i.ytimg.com/vi/W1NjS3t6oqQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg ==rs=AOn4CLBX8cxdLDdzjwIsikF_Yl9mzboJtw',
        url: "https://www.youtube.com/embed/-yRgKhRnIB8"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Contruction Project Management',
        desc: 'This course about Wentworth’s top-ranking construction management degree and its hands-on approach',
        urlToImg: 'https://i.ytimg.com/vi/YaB7-RJHOCg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGUV6av8ckFxdVNoEogocNvD8hGQ',
        url: "https://www.youtube.com/embed/videoseries?list=PL-MQNpO8Wb7BMDAVrbIM9kS-yEfyp52Mz"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Engineering & Contruction',
        title: 'Auditing CA Inter Full Course',
        desc: 'This course contains auditing course and auditing lectures which helps students taking graduate in audit.',
        urlToImg: 'https://i.ytimg.com/vi/7yhm7Fo0dlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAceW9ywFO_FgWXGYXD0LM1d8zO7g',
        url: "https://www.youtube.com/embed/videoseries?list=PLVE_dFhGA23yR5MZE5MR7hcvU37molWpc"
    }
]

const PersonDevelopVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Communication Skills Studies',
        desc: 'Improve your communication skills through this class.similarly you can grow up your interpersonal skills.',
        urlToImg: 'https://i.ytimg.com/vi/srn5jgr9TZo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAq8JnM1EUxWZdi7Z5G4nQcT2F0mg',
        url: "https://www.youtube.com/embed/videoseries?list=PLOaeOd121eBEEWP14TYgSnFsvaTIjPD22"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Guitar Lesson Beginner',
        desc: 'Learn guitar free online through this and develop your musical instrumental skills within a week',
        urlToImg: 'https://i.ytimg.com/vi/BBz-Jyr23M4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzAELeeOg4FKTagXmtSGW4svAkUA',
        url: "https://www.youtube.com/embed/BBz-Jyr23M4"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Classical Music Practice',
        desc: 'Learn Classical music here with hindustani all alankars and alankars means ornaments or adornments.',
        urlToImg: 'https://i.ytimg.com/vi/y6xbwFaYuAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBp9HRTUHqdBMJNU4IRkV5xYCPSSA',
        url: "https://www.youtube.com/embed/qz461tcXRaM"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Body Fitness Yourself',
        desc: 'We recommend switching up your fitness to give your muscles enough time to recover. You can do this workout 2-3x a week',
        urlToImg: 'https://i.ytimg.com/vi/UBMk30rjy0o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCn0pRh1ouSUOseQ6BSJH2y0sB0qA',
        url: "https://www.youtube.com/embed/UBMk30rjy0o"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Reducinf Anxiety and Depression Course',
        desc: 'Through this course or tips you can reduce anxiety and depressions with cognitive behaviour',
        urlToImg: 'https://i.ytimg.com/vi/rPAowG-DjSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf0rJtR22pjOZerF0JwzI2CjVEEg',
        url: "https://www.youtube.com/embed/rPAowG-DjSg"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Motivation For Students',
        desc: 'There is no limit to the power of the human mind. The mind is just like a shining sun which can produce fire provided its energies are focused and directed towards a single point.',
        urlToImg: 'https://i.ytimg.com/vi/-uPaSOD7Dvk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASlGbjKT0JA2BabusD0JiR3X1qyg',
        url: "https://www.youtube.com/embed/RwxC5J8LI4Q"
    },
    {
        id: '1.6',
        courseType: 'Certificate',
        courseCategory: 'Personal Development',
        title: 'Health And Physical Yoga Course',
        desc: `In this video, we have discussed "Aims, Objectives and Importance of Health Education" from the Bachelor of Education's subject  "Health, Physical and Yoga".`,
        urlToImg: 'https://i.ytimg.com/vi/ezUVNTRATow/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBroAGZkf4K9quG9HNagiItfq7Cdg',
        url: "https://www.youtube.com/embed/videoseries?list=PLmCdA4Dk5xt6KNCkk1FXGRjOdX6algnmd"
    }
]

const TeachingVideos = [
    {
        id: '1',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'History Of The World',
        desc: `Learn about the world's history and the history of humanity (or human history) as determined by the study of archaeological and written records.`,
        urlToImg: 'https://i.ytimg.com/vi/BsDFQ0kFiLk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6qI5qNBTvcLtrtOCa76JjsFsSVA',
        url: "https://www.youtube.com/embed/BsDFQ0kFiLk"
    },
    {
        id: '1.1',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'World Geography Full Course',
        desc: 'In this video know about the World Geography Course for Prelims 2021 and other Public Service examinations.',
        urlToImg: 'https://i.ytimg.com/vi/R1m5r7E1qFQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA9LVLQvhunqIPlBnaR4GfJzR1d8Q',
        url: "https://www.youtube.com/embed/videoseries?list=PLS7x1fGbbJPVF9kQh6GtII31UDvIgYqug"
    },
    {
        id: '1.2',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'Journalism Full Course',
        desc: 'you will explore print and digital media through authentic readings and video lectures and increasing your ability to read, research, and develop local and global news stories',
        urlToImg: 'https://i.ytimg.com/vi/Qv4uCYVwmJA/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB8_XaMiz5PYeCN2mHbl0DdJ9rjOw',
        url: "https://www.youtube.com/embed/videoseries?list=PL6_Ne0N4kenOn4xaDsnN5N39hQYhHlu_s"
    },
    {
        id: '1.3',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'Mathematics For Machine Learning',
        desc: 'This course on Mathematics for Machine Learning teaches you all the math needed to get started with mastering Machine Learning',
        urlToImg: 'https://i.ytimg.com/vi/1VSZtNYMntM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeZ0VAIy297JaK-z1BwjguwotPVA',
        url: "https://www.youtube.com/embed/1VSZtNYMntM"
    },
    {
        id: '1.4',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'Business Economics Full Course',
        desc: 'Important Economics topic you must prepare for SSC and CGL exam.including all economic morals.',
        urlToImg: 'https://i.ytimg.com/vi/U4Zlnd50Ato/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBivYOQzecr926ie5nE074UnXdKGQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLWEdFX-t6_I6onPxsVg-nc6aGDwTLcn34"
    },
    {
        id: '1.5',
        courseType: 'Certificate',
        courseCategory: 'Teaching & Academics',
        title: 'Chemistry Full Course',
        desc: 'This is the full course of Physical chemistry where the all topics have been discussed in a very comprehensive way.',
        urlToImg: 'https://i.ytimg.com/vi/8vyboVwyzfU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6QXVNBiyI6kLMdO9k6qG6zXAzJw',
        url: "https://www.youtube.com/embed/PQechXuFoyI"
    }

]

const DiplomaVideos = [
    {
        id: '1',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Marketing Management',
        desc: 'If you wanna learn about retail and marketing management see this full course.',
        urlToImg: 'https://i.ytimg.com/vi/jMmgUrPJ9iY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2aVkHF-VUCG2orYaopX137u809Q',
        url: "https://www.youtube.com/embed/jMmgUrPJ9iY"
    },
    {
        id: '1.13',
        courseType: 'Diploma',
        courseCategory: 'Personal Development',
        title: 'Diploma in HIP HOP Dance Choreography',
        desc: 'In this course- you will learn new HIP HOP dance choreography basic to advance it also supports to you to get certification about this.',
        urlToImg: 'https://i.ytimg.com/vi/pl-3tpiy2xE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJNiKBDSB-gTPdCAHqW98Pu2WGcw',
        url: "https://www.youtube.com/embed/pl-3tpiy2xE"
    },
    {
        id: '1.1',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Sales Management',
        desc: 'Learn sales management with project know about how to create sales management systems.',
        urlToImg: 'https://i.ytimg.com/vi/C0hpLQc_gFc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArGCJu1taA9iL_HqaZH0hPZXZEMw',
        url: "https://www.youtube.com/embed/videoseries?list=PLJtJvO3aaWe1yiRvTkNDhV9lUDSHWeWxM"
    },
    {
        id: '1.2',
        courseType: 'Diploma',
        courseCategory: 'Sales & Marketing',
        title: 'Diploma in Social Media Marketing Full Course',
        desc: 'You will learn what is social media optimization and how to use social media efficiently to make any brand grow with this social media optimization course.',
        urlToImg: 'https://i.ytimg.com/vi/CbHrb-ULs4U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbxAap04PPAI7VZmr2DuvxH8neRA',
        url: "https://www.youtube.com/embed/pu_99GBMQdM"
    },
    {
        id: '1.3',
        courseType: 'Diploma',
        courseCategory: 'Management',
        title: 'Diploma in Nursing Management',
        desc: 'In This Video You Will Know About the Introduction, Definition Of A Nurse Manager And Concept of Nursing Management.',
        urlToImg: 'https://i.ytimg.com/vi/yXSLNRqTMMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsST7drYdLpmaw3gJ2Ch4V8OxJJg',
        url: "https://www.youtube.com/embed/g8wAn5LRx4Y"
    },
    {
        id: '1.4',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Hematology',
        desc: 'For learning medicine one must have prerequisite knowledge of basic subjects like physiology, pathology, Pharma etc.',
        urlToImg: 'https://i.ytimg.com/vi/wmAsX_iG76g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMs1Xz-1ybgHVyGerhi_7DgJqRoQ',
        url: "https://www.youtube.com/embed/wmAsX_iG76gs"
    },
    {
        id: '1.5',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Bio-Medical Research',
        desc: 'This course is about free bio-medical research online courses with free diploma which are provided by top USA, Australian, and UK universities.',
        urlToImg: 'https://i.ytimg.com/vi/Nnxc-VRu1UA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5g_ntH3SdLsaC2bYxCPFaywLa2A',
        url: "https://www.youtube.com/embed/videoseries?list=PLyqSpQzTE6M84uhv2xVd-sF0I1VZU9XVO"
    },
    {
        id: '1.6',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'Diploma in Mordern Physics',
        desc: 'Modern physics is an effort to understand the underlying processes of the interactions with matter, utilizing the tools of science and engineering.',
        urlToImg: 'https://i.ytimg.com/vi/3lTQqEehEhI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRjKB6axwpw6HcmhqH6XS5OU7m5Q',
        url: "https://www.youtube.com/embed/3lTQqEehEhIs"
    },
    {
        id: '1.7',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Human Microbiome',
        desc: 'Microbiome expands the genetic and functional capacity of its human host. also explores next-generation microbiome therapeutics and research',
        urlToImg: 'https://i.ytimg.com/vi/XCaTQzjX2rQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjwIwCZAABRWHfxxUe_NYSu2Aycw',
        url: "https://www.youtube.com/embed/XCaTQzjX2rQ"
    },
    {
        id: '1.8',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'IELTS Full Diploma Course',
        desc: 'In this course- you will learn about IELTS and how to speak, indrouce yourself and get a better result in your career.',
        urlToImg: 'https://i.ytimg.com/vi/Jzps8q2es7c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdhpz1ODPFYQv-Kyey16XKdCLmDg',
        url: "https://www.youtube.com/embed/Jzps8q2es7c"
    },
    {
        id: '1.9',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Dog Grooming',
        desc: 'in this course- we will take a peek behind the curtain of my dog grooming course scheduled to be available for purchase in only a few short days!',
        urlToImg: 'https://i.ytimg.com/vi/k8eBExNhGjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7GvmgYfSqq08su7w2KavJ38TCBg',
        url: "https://www.youtube.com/embed/_aH5DP9fqjE"
    },
    {
        id: '1.10',
        courseType: 'Diploma',
        courseCategory: 'Management',
        title: 'Diploma in Food Safety',
        desc: 'In this video- we have discussed about how you can take food safety and how you can apply for FosTac certificates.',
        urlToImg: 'https://i.ytimg.com/vi/okMptG8w7Bk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAB2Uvj1pBO3fCGrhAzcPeNatInPw',
        url: "https://www.youtube.com/embed/okMptG8w7Bk"
    },
    {
        id: '1.11',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'Diploma in Paralegal Studies',
        desc: 'In this course- what is Paralegal and how can we get certification for this course we will learn about it here.',
        urlToImg: 'https://i.ytimg.com/vi/xBRWEZRsZSk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGG_daeHko7Nw8KGqAEB8rVJK1SQ',
        url: "https://www.youtube.com/embed/xBRWEZRsZSk"
    },
    {
        id: '1.12',
        courseType: 'Diploma',
        courseCategory: 'Engineering & Contruction',
        title: 'Diploma in Marine Diesel Engine',
        desc: 'In this course- learn overview of our hands on basic marine diesel engine course and function about maring diesel engines.',
        urlToImg: 'https://i.ytimg.com/vi/Qh3fK4hfs1I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGrsfR1Clf9twQfz7UT2Ec_0BcpQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLYu85Js5n1QXeT33kUcdHUz58LQVIuoz0"
    },
    {
        id: '1.13',
        courseType: 'Diploma',
        courseCategory: 'Personal Development',
        title: 'Diploma in Music Production',
        desc: ' You will learn everything from how to use a DAW, how to arrange your music, how to use a synth, how to use a sampler, how to use effects including reverb.',
        urlToImg: 'https://i.ytimg.com/vi/damoEmoUquQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBbY77VKMnKxJbNlSqkzSe2hFUj6w',
        url: "https://www.youtube.com/embed/videoseries?list=PLzq2RsjgsUG6zWc1K2M9zrSQ2e8YxewOF"
    }
]

const Python = [
    {
        id: '1',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Marketing Management',
        desc: 'If you wanna learn about retail and marketing management see this full course.',
        urlToImg: 'https://i.ytimg.com/vi/jMmgUrPJ9iY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2aVkHF-VUCG2orYaopX137u809Q',
        url: "https://www.youtube.com/embed/jMmgUrPJ9iY"
    },
    {
        id: '1.13',
        courseType: 'Diploma',
        courseCategory: 'Personal Development',
        title: 'Diploma in HIP HOP Dance Choreography',
        desc: 'In this course- you will learn new HIP HOP dance choreography basic to advance it also supports to you to get certification about this.',
        urlToImg: 'https://i.ytimg.com/vi/pl-3tpiy2xE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJNiKBDSB-gTPdCAHqW98Pu2WGcw',
        url: "https://www.youtube.com/embed/pl-3tpiy2xE"
    },
    {
        id: '1.1',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Sales Management',
        desc: 'Learn sales management with project know about how to create sales management systems.',
        urlToImg: 'https://i.ytimg.com/vi/C0hpLQc_gFc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArGCJu1taA9iL_HqaZH0hPZXZEMw',
        url: "https://www.youtube.com/embed/videoseries?list=PLJtJvO3aaWe1yiRvTkNDhV9lUDSHWeWxM"
    },
    {
        id: '1.2',
        courseType: 'Diploma',
        courseCategory: 'Sales & Marketing',
        title: 'Diploma in Social Media Marketing Full Course',
        desc: 'You will learn what is social media optimization and how to use social media efficiently to make any brand grow with this social media optimization course.',
        urlToImg: 'https://i.ytimg.com/vi/CbHrb-ULs4U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbxAap04PPAI7VZmr2DuvxH8neRA',
        url: "https://www.youtube.com/embed/pu_99GBMQdM"
    },
    {
        id: '1.3',
        courseType: 'Diploma',
        courseCategory: 'Management',
        title: 'Diploma in Nursing Management',
        desc: 'In This Video You Will Know About the Introduction, Definition Of A Nurse Manager And Concept of Nursing Management.',
        urlToImg: 'https://i.ytimg.com/vi/yXSLNRqTMMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsST7drYdLpmaw3gJ2Ch4V8OxJJg',
        url: "https://www.youtube.com/embed/g8wAn5LRx4Y"
    },
    {
        id: '1.4',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Hematology',
        desc: 'For learning medicine one must have prerequisite knowledge of basic subjects like physiology, pathology, Pharma etc.',
        urlToImg: 'https://i.ytimg.com/vi/wmAsX_iG76g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMs1Xz-1ybgHVyGerhi_7DgJqRoQ',
        url: "https://www.youtube.com/embed/wmAsX_iG76gs"
    },
    {
        id: '1.5',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Bio-Medical Research',
        desc: 'This course is about free bio-medical research online courses with free diploma which are provided by top USA, Australian, and UK universities.',
        urlToImg: 'https://i.ytimg.com/vi/Nnxc-VRu1UA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5g_ntH3SdLsaC2bYxCPFaywLa2A',
        url: "https://www.youtube.com/embed/videoseries?list=PLyqSpQzTE6M84uhv2xVd-sF0I1VZU9XVO"
    },
    {
        id: '1.6',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'Diploma in Mordern Physics',
        desc: 'Modern physics is an effort to understand the underlying processes of the interactions with matter, utilizing the tools of science and engineering.',
        urlToImg: 'https://i.ytimg.com/vi/3lTQqEehEhI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRjKB6axwpw6HcmhqH6XS5OU7m5Q',
        url: "https://www.youtube.com/embed/3lTQqEehEhIs"
    },
    {
        id: '1.7',
        courseType: 'Diploma',
        courseCategory: 'Health',
        title: 'Diploma in Human Microbiome',
        desc: 'Microbiome expands the genetic and functional capacity of its human host. also explores next-generation microbiome therapeutics and research',
        urlToImg: 'https://i.ytimg.com/vi/XCaTQzjX2rQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjwIwCZAABRWHfxxUe_NYSu2Aycw',
        url: "https://www.youtube.com/embed/XCaTQzjX2rQ"
    },
    {
        id: '1.8',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'IELTS Full Diploma Course',
        desc: 'In this course- you will learn about IELTS and how to speak, indrouce yourself and get a better result in your career.',
        urlToImg: 'https://i.ytimg.com/vi/Jzps8q2es7c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdhpz1ODPFYQv-Kyey16XKdCLmDg',
        url: "https://www.youtube.com/embed/Jzps8q2es7c"
    },
    {
        id: '1.9',
        courseType: 'Diploma',
        courseCategory: 'Business',
        title: 'Diploma in Dog Grooming',
        desc: 'in this course- we will take a peek behind the curtain of my dog grooming course scheduled to be available for purchase in only a few short days!',
        urlToImg: 'https://i.ytimg.com/vi/k8eBExNhGjI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7GvmgYfSqq08su7w2KavJ38TCBg',
        url: "https://www.youtube.com/embed/_aH5DP9fqjE"
    },
    {
        id: '1.10',
        courseType: 'Diploma',
        courseCategory: 'Management',
        title: 'Diploma in Food Safety',
        desc: 'In this video- we have discussed about how you can take food safety and how you can apply for FosTac certificates.',
        urlToImg: 'https://i.ytimg.com/vi/okMptG8w7Bk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAB2Uvj1pBO3fCGrhAzcPeNatInPw',
        url: "https://www.youtube.com/embed/okMptG8w7Bk"
    },
    {
        id: '1.11',
        courseType: 'Diploma',
        courseCategory: 'Teaching & Academics',
        title: 'Diploma in Paralegal Studies',
        desc: 'In this course- what is Paralegal and how can we get certification for this course we will learn about it here.',
        urlToImg: 'https://i.ytimg.com/vi/xBRWEZRsZSk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGG_daeHko7Nw8KGqAEB8rVJK1SQ',
        url: "https://www.youtube.com/embed/xBRWEZRsZSk"
    },
    {
        id: '1.12',
        courseType: 'Diploma',
        courseCategory: 'Engineering & Contruction',
        title: 'Diploma in Marine Diesel Engine',
        desc: 'In this course- learn overview of our hands on basic marine diesel engine course and function about maring diesel engines.',
        urlToImg: 'https://i.ytimg.com/vi/Qh3fK4hfs1I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGrsfR1Clf9twQfz7UT2Ec_0BcpQ',
        url: "https://www.youtube.com/embed/videoseries?list=PLYu85Js5n1QXeT33kUcdHUz58LQVIuoz0"
    },
    {
        id: '1.13',
        courseType: 'Diploma',
        courseCategory: 'Personal Development',
        title: 'Diploma in Music Production',
        desc: ' You will learn everything from how to use a DAW, how to arrange your music, how to use a synth, how to use a sampler, how to use effects including reverb.',
        urlToImg: 'https://i.ytimg.com/vi/damoEmoUquQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBbY77VKMnKxJbNlSqkzSe2hFUj6w',
        url: "https://www.youtube.com/embed/videoseries?list=PLzq2RsjgsUG6zWc1K2M9zrSQ2e8YxewOF"
    }
]

export function ItVideo() {
    return ItVideos
}
export function LanguageVideo() {
    return LanguageVideos
}
export function SalesMarketingVideo() {
    return SalesMarketingVideos
}
export function ManagementVideo() {
    return ManagementVideos
}
export function HealthVideo() {
    return HealthVideos
}
export function BusinessVideo() {
    return BusinessVideos
}
export function EngineeringVideo() {
    return EngineeringVideos
}
export function PersonDevelopVideo() {
    return PersonDevelopVideos
}
export function TeachingVideo() {
    return TeachingVideos
}
export function DiplomaVideo() {
    return DiplomaVideos
}
