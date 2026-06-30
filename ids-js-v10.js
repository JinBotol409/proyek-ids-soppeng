const THEME_CSS = `/* =====================
   GLOBAL
===================== */
body.light-mode{
background:#f4f4f4!important;
color:#111!important;
}

.theme-toggle{
background:#1b1b1b;
border:1px solid #333;
color:#fff;
width:22px;
height:22px;
border-radius:50%;
font-size:16px;
cursor:pointer;
}

body.light-mode .theme-toggle{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .author-name,
body.light-mode .ecu-file-name{
color:#111!important;
}

body.light-mode .author-date,
body.light-mode .ecu-file-size{
color:#666!important;
}

body.light-mode .comment-text{
color:#333!important;
}

body.light-mode .ecu-file-box{
background:#fff!important;
border:1px solid #ddd!important;
}


/* =====================
   HOME
===================== */

/* Header & kartu utama */
body.light-mode header,
body.light-mode .post-card,
body.light-mode .info-card{
background:#fff!important;
color:#111!important;
}

body.light-mode header{
box-shadow:0 0 14px rgba(192,0,0,.22)!important;
}

body.light-mode .logo,
body.light-mode h1,
body.light-mode h2,
body.light-mode h3,
body.light-mode .section-title{
color:#c00000!important;
}

body.light-mode .hero p,
body.light-mode .post-content p,
body.light-mode .info-card p{
color:#333!important;
}

/* Statistik hero */
body.light-mode .hero-stats div{
background:#fff!important;
border:1px solid rgba(192,0,0,.45)!important;
color:#b00000!important;
box-shadow:0 0 12px rgba(255,0,0,.15)!important;
font-weight:bold;
}

/* Side menu */
body.light-mode .side-menu{
background:#fff!important;
color:#111!important;
border-left:2px solid #c00000!important;
}

body.light-mode .side-header{
background:#fff!important;
border-bottom:1px solid #eee!important;
}

body.light-mode .side-header h2{
color:#c00000!important;
}

body.light-mode .close-btn{
color:#111!important;
}

/* Link menu utama */
body.light-mode .side-body > a{
background:#f3f3f3!important;
color:#222!important;
border-left:3px solid transparent!important;
}

body.light-mode .side-body > a:hover{
background:#ffecec!important;
border-left:3px solid #c00000!important;
color:#c00000!important;
}

/* Kontak kecil bawah menu - jangan ikut background link menu */
body.light-mode .menu-contact-mini,
body.light-mode .menu-contact-mini a,
body.light-mode .menu-mini-email{
background:transparent!important;
background-color:transparent!important;
border:none!important;
box-shadow:none!important;
}

body.light-mode .menu-mini-email{
display:block!important;
padding:0!important;
margin:2px 0!important;
color:#006fd6!important;
font-size:11px!important;
line-height:1.4!important;
text-align:center!important;
text-decoration:none!important;
border-radius:0!important;
}

/* Modal login/register */
body.light-mode .modal.active{
background:rgba(0,0,0,.55)!important;
backdrop-filter:blur(7px)!important;
-webkit-backdrop-filter:blur(7px)!important;
}

body.light-mode .modal-box{
background:#fff!important;
color:#111!important;
border:1px solid #c00000!important;
box-shadow:0 0 25px rgba(0,0,0,.25)!important;
}

body.light-mode .modal-box h2{
color:#c00000!important;
}

body.light-mode .modal-box input{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .modal-box input::placeholder{
color:#777!important;
}

body.light-mode .modal-close{
color:#111!important;
}

body.light-mode .forgot-info,
body.light-mode .forgot-info1{
color:#666!important;
}
/* =====================
   REPAIR
===================== */
body.light-mode .navbar{
background:#fff!important;
box-shadow:0 0 14px rgba(192,0,0,.25)!important;
}

body.light-mode .post,
body.light-mode .content,
body.light-mode .comment-section,
body.light-mode .comment-item{
background:#fff!important;
color:#111!important;
border-color:#ddd!important;
}

body.light-mode .desc{
color:#333!important;
}

body.light-mode .nav-btn,
body.light-mode .comment-toggle,
body.light-mode .search-popup,
body.light-mode .search-form input,
body.light-mode .search-reset{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .title{
color:#c00000!important;
}


/* =====================
   VIEW REPAIR
===================== */
body.light-mode .header{
background:#fff!important;
box-shadow:0 0 14px rgba(192,0,0,.25)!important;
}

body.light-mode .post-card{
background:#fff!important;
color:#111!important;
border-color:#ddd!important;
}

body.light-mode .post-title{
color:#c00000!important;
}

body.light-mode .post-content{
color:#333!important;
}

body.light-mode .comment-box{
background:#fff!important;
border:1px solid #ddd!important;
}

body.light-mode textarea{
background:#fff!important;
color:#111!important;
border:1px solid #ccc!important;
}

body.light-mode .header .nav a{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .header .nav a:hover{
background:#ffecec!important;
color:#c00000!important;
border-color:#c00000!important;
}

body.light-mode .ecu-lock-btn{
background:#f3f3f3!important;
color:#c00000!important;
border:1px solid #ddd!important;
}

body.light-mode .ecu-download-btn{
background:#c00000!important;
color:#fff!important;
border:1px solid #c00000!important;
}

body.light-mode footer{
background:#fff!important;
color:#666!important;
border-top:1px solid #ddd!important;
}
/* =====================
   AI ECU
===================== */

body.light-mode .ai-page{
background:#f4f4f4!important;
color:#111!important;
}

body.light-mode .ai-box{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.08)!important;
}

body.light-mode .ai-body,
body.light-mode .ai-top{
background:#fff!important;
color:#111!important;
border-color:#ddd!important;
}

body.light-mode .ai-title{
color:#c00000!important;
}

body.light-mode .ai-desc,
body.light-mode .note{
color:#333!important;
}

body.light-mode .home-btn,
body.light-mode .quick button{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode #chat{
background:#f7f7f7!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode #chat .msg,
body.light-mode .msg{
color:#111!important;
}

body.light-mode #chat .msg.bot,
body.light-mode .msg.bot,
body.light-mode .bot{
background:#fff!important;
color:#111!important;
border-left:4px solid #c00000!important;
}

body.light-mode #chat .msg.user,
body.light-mode .msg.user,
body.light-mode .user{
background:#ffecec!important;
color:#111!important;
border:1px solid #f0b0b0!important;
}

body.light-mode .input-row textarea,
body.light-mode textarea#question{
background:#fff!important;
color:#111!important;
border:1px solid #ccc!important;
}

body.light-mode .input-row textarea::placeholder,
body.light-mode textarea#question::placeholder{
color:#777!important;
}

body.light-mode .input-row button{
background:#c00000!important;
color:#fff!important;
border:1px solid #c00000!important;
}

/* =====================
   ECU FILES
===================== */

body.light-mode .file-card{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.06)!important;
}

body.light-mode .file-title{
color:#c00000!important;
}

body.light-mode .file-info{
color:#666!important;
}

body.light-mode .file-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .file-left{
background:transparent!important;
color:#111!important;
}

body.light-mode .file-icon{
background:#eee!important;
color:#111!important;
}

body.light-mode .file-name{
color:#111!important;
}

body.light-mode .file-size{
color:#666!important;
}

body.light-mode .download-btn{
background:#f3f3f3!important;
color:#c00000!important;
border:1px solid #ddd!important;
}

body.light-mode .download-btn:hover{
background:#ffecec!important;
color:#c00000!important;
border-color:#c00000!important;
}

/* =====================
   SPORT
===================== */

body.light-mode .hero{
background:#fff!important;
color:#111!important;
}

body.light-mode .hero h1{
color:#c00000!important;
}

body.light-mode .hero p{
color:#333!important;
}

body.light-mode .container{
background:#f4f4f4!important;
}

body.light-mode .card{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.06)!important;
}

body.light-mode .card h2{
color:#c00000!important;
}

body.light-mode .card p{
color:#333!important;
}

body.light-mode .sport-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .sport-box h3{
color:#c00000!important;
}

body.light-mode .sport-box p{
color:#333!important;
}

body.light-mode .badge{
background:#c00000!important;
color:#fff!important;
}

body.light-mode .header .nav a{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode footer{
background:#fff!important;
color:#666!important;
border-top:1px solid #ddd!important;
}
/* =====================
   FIGHTER
===================== */

body.light-mode .header{
background:#fff!important;
color:#111!important;
}

body.light-mode .header .nav a{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .hero{
background:#fff!important;
color:#111!important;
}

body.light-mode .hero h1{
color:#c00000!important;
}

body.light-mode .hero p{
color:#333!important;
}

body.light-mode .hero-badge{
background:#c00000!important;
color:#fff!important;
}

body.light-mode .container{
background:#f4f4f4!important;
}

body.light-mode .profile-card,
body.light-mode .card{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.06)!important;
}

body.light-mode .profile-card h2,
body.light-mode .card h2{
color:#c00000!important;
}

body.light-mode .profile-card p,
body.light-mode .card p,
body.light-mode .info-list{
color:#333!important;
}

body.light-mode .info-list b{
color:#111!important;
}

body.light-mode .box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .box h2{
color:#c00000!important;
}

body.light-mode .box h3{
color:#111!important;
}

body.light-mode .box p{
color:#333!important;
}

body.light-mode footer{
background:#fff!important;
color:#666!important;
border-top:1px solid #ddd!important;
}

/* =====================
   DASHBOARD
===================== */

body.light-mode .header{
background:#fff!important;
color:#111!important;
box-shadow:0 0 14px rgba(192,0,0,.18)!important;
}

body.light-mode .user-menu{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .user-name{
color:#111!important;
}

body.light-mode .user-role{
color:#666!important;
}

body.light-mode .dropdown-menu{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 18px rgba(0,0,0,.12)!important;
}

body.light-mode .dropdown-profile h3{
color:#c00000!important;
}

body.light-mode .dropdown-profile p{
color:#666!important;
}

body.light-mode .dropdown-links a{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .dropdown-links a:hover{
background:#ffecec!important;
color:#c00000!important;
border-color:#c00000!important;
}

body.light-mode .hero-panel,
body.light-mode .stat-card,
body.light-mode .section,
body.light-mode .order-card,
body.light-mode .notification-item,
body.light-mode .post-card,
body.light-mode .comment-item,
body.light-mode .modal{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.06)!important;
}

body.light-mode .hero-panel h1,
body.light-mode .section h2,
body.light-mode .stat-card h2,
body.light-mode .order-title,
body.light-mode .notification-title,
body.light-mode .post-title,
body.light-mode .comment-name,
body.light-mode .modal h3{
color:#c00000!important;
}

body.light-mode .hero-panel p,
body.light-mode .stat-card p,
body.light-mode .order-date,
body.light-mode .order-info,
body.light-mode .notification-message,
body.light-mode .notification-date,
body.light-mode .post-desc,
body.light-mode .post-meta,
body.light-mode .comment-date,
body.light-mode .comment-text,
body.light-mode .empty{
color:#333!important;
}

body.light-mode .action-btn.dark{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .action-btn.dark:hover{
background:#ffecec!important;
color:#c00000!important;
border-color:#c00000!important;
}

body.light-mode .order-btn.dark{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .form-row input{
background:#fff!important;
color:#111!important;
border:1px solid #ccc!important;
}

body.light-mode .footer{
background:#fff!important;
color:#666!important;
border-top:1px solid #ddd!important;
}


/* =====================
   PANDUAN READ WRITE ECU
===================== */

body.light-mode .back{
background:#f3f3f3!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .back:hover{
background:#ffecec!important;
color:#c00000!important;
border-color:#c00000!important;
}

body.light-mode .banner{
background:#fff!important;
border:1px solid #ddd!important;
box-shadow:0 0 12px rgba(0,0,0,.06)!important;
}

body.light-mode .step{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .step-content h3{
color:#c00000!important;
}

body.light-mode .step-content p{
color:#333!important;
}

body.light-mode .num{
background:#c00000!important;
color:#fff!important;
}

body.light-mode .warning{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .warning ul,
body.light-mode .warning li{
color:#333!important;
}

body.light-mode .safe-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .cta{
background:#fff!important;
}

body.light-mode .btn{
background:#c00000!important;
color:#fff!important;
border:1px solid #c00000!important;
}

/* =====================
   PANDUAN REMAP ORDER
===================== */

body.light-mode .header-title{
color:#c00000!important;
}

body.light-mode .info-grid{
background:transparent!important;
}

body.light-mode .info-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .info-box b{
color:#c00000!important;
}

body.light-mode .step-list{
background:transparent!important;
}

body.light-mode .step{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .step-num{
background:#c00000!important;
color:#fff!important;
}

body.light-mode .step-body h3{
color:#c00000!important;
}

body.light-mode .step-body p{
color:#333!important;
}

body.light-mode .warn{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .warn ul,
body.light-mode .warn li{
color:#333!important;
}

body.light-mode .cta-wrap{
background:#fff!important;
}

body.light-mode .cta-btn{
background:#c00000!important;
color:#fff!important;
border:1px solid #c00000!important;
box-shadow:none!important;
}

body.light-mode .footer-note{
background:#fff!important;
color:#666!important;
border-top:1px solid #ddd!important;
}

/* =====================
   REMAP ECU
===================== */

body.light-mode .price-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .price-box span{
color:#666!important;
}

body.light-mode .price-box b{
color:#00a84f!important;
}

body.light-mode .service-grid{
background:transparent!important;
}

body.light-mode .service-box{
background:#f8f8f8!important;
color:#111!important;
border:1px solid #ddd!important;
box-shadow:none!important;
}

body.light-mode .service-box b{
color:#111!important;
}

body.light-mode .card ul,
body.light-mode .card li{
color:#333!important;
}

body.light-mode #orderForm .card{
background:#fff!important;
color:#111!important;
border:1px solid #ddd!important;
}

body.light-mode .form-group label{
color:#111!important;
}

body.light-mode .form-group input,
body.light-mode .form-group textarea{
background:#fff!important;
color:#111!important;
border:1px solid #ccc!important;
}

body.light-mode .form-group input::placeholder,
body.light-mode .form-group textarea::placeholder{
color:#777!important;
}

body.light-mode .note{
color:#666!important;
}

body.light-mode .continue-btn,
body.light-mode .submit-btn{
background:#c00000!important;
color:#fff!important;
border:1px solid #c00000!important;
box-shadow:none!important;
}

body.light-mode .top-maintenance{
background:#fff3cd!important;
color:#664d03!important;
border:1px solid #ffecb5!important;
}

body.light-mode .alert-success{
background:#e8fff0!important;
color:#006b2e!important;
border:1px solid #9ee6b8!important;
}

body.light-mode .alert-error{
background:#ffecec!important;
color:#c00000!important;
border:1px solid #f3b1b1!important;
}`;

const HOME_CSS = `*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Orbitron',sans-serif;
position:relative;
background:
linear-gradient(rgba(0,0,0,.92),rgba(0,0,0,.94)),
url('/bucket/css/bg-ecu.png');
background-size:contet;
background-position:center;
background-attachment:none;
color:#fff;
overflow-x:hidden;
}

header{
width:100%;
padding:11px 14px;
background:#0d0d0d;
border-bottom:2px solid #c00000;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;
top:0;
z-index:999;
border:none!important;
box-shadow:0 0 14px rgba(255,0,0,.45);
}

.logo{
font-size:16px;
margin-left:15px;
font-weight:bold;
color:#ff2b2b;
letter-spacing:1px;
}

.menu-button{
font-size:22px;
margin-right:18px;
cursor:pointer;
transition:.3s;
transition:transform .12s ease;
outline:none;
-webkit-tap-highlight-color:transparent;
}

.menu-button:active{
transform:scale(.82);
}

.menu-button:hover{
color:#ff2b2b;
}

.side-menu{
position:fixed;
top:0;
right:-100%;
width:100%;
max-width:360px;
height:100vh;
background:#111;
border-left:2px solid #c00000;
z-index:9999;
transition:.3s;
overflow-y:auto;
box-shadow:-5px 0 30px rgba(0,0,0,.5);
}

.side-menu.active{
right:0;
}

.side-header{
padding:9px;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid #222;
}

.side-header h2{
color:#ff2b2b;
font-size:18px;
}

.close-btn{
font-size:30px;
cursor:pointer;
margin-right:10px;
transition:transform .12s ease;
outline:none;
-webkit-tap-highlight-color:transparent;
user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.close-btn:active{
transform:scale(.78);
}

.side-body{
padding:18px;
}

.side-body a{
display:block;
padding:13px;
margin-bottom:10px;
background:#1b1b1b;
border-radius:8px;
text-decoration:none;
color:#ddd;
transition:.3s;
border-left:3px solid transparent;
font-size:14px;
}

.side-body a:hover{
background:#222;
border-left:3px solid #ff2b2b;
color:#fff;
}

.hero{
padding:65px 20px 45px;
text-align:center;
}

.hero img{
width:150px;
max-width:650px;
height:auto;
border-radius:8%;
object-fit:cover;
border:3px solid none;
box-shadow:0 0 30px rgba(255,0,0,.45);
margin-bottom:22px;
}

.hero h1{
font-size:36px;
margin-bottom:15px;
text-shadow:0 0 15px rgba(255,0,0,.3);
}

.hero p{
max-width:850px;
margin:auto;
line-height:1.8;
font-size:14px;
color:#ccc;
}

.hero button,
.hero a{
border:1px solid rgba(255,0,0,.3);
position:relative;
overflow:hidden;

display:inline-block;
margin-top:28px;
padding:13px 28px;
background:#101;
border-radius:10px;
font-weight:bold;
color:#fff;
cursor:pointer;
text-decoration:none;
font-size:14px;
box-shadow:0 0 20px rgba(255,0,0,.40);
outline:none;
-webkit-tap-highlight-color:transparent;
transition:transform .12s ease, background .3s ease;
user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.hero button{
animation:breath 3s infinite ease-in-out;
}
@keyframes breath{
0%,100%{
box-shadow:0 0 10px rgba(255,0,0,.3);
}
50%{
box-shadow:0 0 25px rgba(255,0,0,.5);
}
}

.hero button:active,
.hero a:active{
transform:scale(.92);
outline:none;
}

.hero button:hover,
.hero a:hover{
background:#101;
}

.hero button::after{
content:'';
position:absolute;
top:0;
left:-30%;
width:25%;
height:2px;
background:#fff;
box-shadow:
0 0 5px red,
0 0 10px red,
0 0 20px red;
animation:runLine 2s linear infinite;
}

@keyframes runLine{
0%{
left:-30%;
top:0;
}

25%{
left:100%;
top:0;
}

50%{
left:100%;
top:100%;
}

75%{
left:-30%;
top:100%;
}

100%{
left:-30%;
top:0;
}
}

.hero button::before{
content:'';
position:absolute;
inset:0;
border-radius:10px;
padding:1px;

background:
linear-gradient(
90deg,
rgba(255,0,0,.25),
rgba(255,0,0,.8),
rgba(255,0,0,.25)
);

-webkit-mask:
linear-gradient(#fff 0 0) content-box,
linear-gradient(#fff 0 0);

-webkit-mask-composite:xor;
mask-composite:exclude;
}

.hero button::after{
content:'';
position:absolute;
width:10px;
height:10px;
border-radius:50%;
background:#fff;

box-shadow:
0 0 5px #fff,
0 0 10px red,
0 0 20px red,
0 0 35px red;

animation:ecuRunner 10s linear infinite;
}

@keyframes ecuRunner{
0%{
top:-5px;
left:-5px;
}

25%{
top:-5px;
left:calc(100% - 5px);
}

50%{
top:calc(100% - 5px);
left:calc(100% - 5px);
}

75%{
top:calc(100% - 5px);
left:-5px;
}

100%{
top:-5px;
left:-5px;
}
}

.section-title{
padding:0 20px;
max-width:1000px;
margin:0 auto 15px;
color:#ff2b2b;
font-size:20px;
}

.post-section{
padding:0 20px 25px;
max-width:1000px;
margin:auto;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:18px;
}

.post-card{
background:#111;
border-radius:14px;
overflow:hidden;
border:1px solid #222;
box-shadow:0 0 20px rgba(255,0,0,.05);
}

.post-card img.post-img{
width:100%;
height:185px;
object-fit:cover;
display:block;
}

.post-content{
padding:15px;
}

.post-content h3{
margin-bottom:10px;
color:#ff2b2b;
font-size:16px;
line-height:1.4;
}

.post-content h3 a{
color:#ff2b2b;
text-decoration:none;
}

.post-content p{
line-height:1.6;
color:#ccc;
font-size:13px;
}

.post-info{
margin-top:14px;
display:flex;
align-items:center;
gap:8px;
font-size:12px;
color:#888;
}

.author-img{
width:30px;
height:30px;
border-radius:50%;
object-fit:cover;
border:1px solid #ff2b2b;
}

.comment-link{
display:inline-block;
margin-top:10px;
color:#ff3c3c;
text-decoration:none;
font-size:12px;
}

.ecu-file-box{
margin-top:12px;
background:#1a1a1a;
border:1px solid #2a2a2a;
border-radius:12px;
padding:10px;
display:flex;
align-items:center;
justify-content:space-between;
gap:10px;
}

.ecu-file-left{
display:flex;
align-items:center;
gap:10px;
overflow:hidden;
}

.ecu-file-icon{
width:38px;
height:38px;
border-radius:10px;
background:#2a2a2a;
display:flex;
align-items:center;
justify-content:center;
font-size:18px;
flex-shrink:0;
}

.ecu-file-info{
overflow:hidden;
}

.ecu-file-name{
font-size:12px;
font-weight:bold;
color:#fff;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
max-width:150px;
}

.ecu-file-size{
font-size:10px;
color:#888;
margin-top:2px;
}

.ecu-download-btn{
width:36px;
height:36px;
border-radius:9px;
background:#c00000;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
color:#fff;
font-size:16px;
flex-shrink:0;
}

.ecu-download-btn:hover{
background:#ff2b2b;
}

.ecu-lock-btn{
width:36px;
height:36px;
border-radius:9px;
background:#333;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
color:#aaa;
font-size:16px;
flex-shrink:0;
cursor:pointer;
}

.info-section{
max-width:1000px;
margin:10px auto;
padding:0 20px 25px;
}

.info-card{
background:#111;
border:1px solid #222;
border-radius:14px;
padding:18px;
margin-bottom:18px;
}

.info-card h2{
color:#ff2b2b;
font-size:19px;
margin-bottom:10px;
}

.info-card p{
color:#ccc;
font-size:14px;
line-height:1.7;
}

.service-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
gap:12px;
margin-top:14px;
}

.service-box{
background:#1a1a1a;
padding:13px;
border-radius:10px;
border:1px solid #2a2a2a;
font-size:13px;
color:#ddd;
line-height:1.5;
}

.gallery-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
gap:12px;
margin-top:14px;
}

.gallery-grid img,
.gallery-grid video{
width:100%;
height:120px;
object-fit:cover;
border-radius:10px;
border:1px solid #333;
background:#000;
}

.modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.75);
display:none;
justify-content:center;
align-items:center;
z-index:99999;
}

.modal.active{
display:flex;
}

.modal-box{
width:90%;
max-width:320px;
background:#111;
border:1px solid #c00000;
border-radius:15px;
padding:28px;
position:relative;
}

.modal-box h2{
text-align:center;
margin-bottom:20px;
color:#ff2b2b;
}

.modal-close{
position:absolute;
top:10px;
right:15px;
font-size:28px;
cursor:pointer;
outline:none;
-webkit-tap-highlight-color:transparent;

transition:transform .12s ease;

user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.modal-close:active{
transform:scale(.78);
}

.modal-box input{
width:100%;
padding:13px;
margin-bottom:14px;
background:#1b1b1b;
border:1px solid #333;
border-radius:8px;
color:#fff;
caret-color:#fff;
}

.modal-box input:focus{
outline:none!important;
box-shadow:none!important;
border:1px solid #333!important;
}

.modal-box button{
width:100%;
padding:13px;
background:#c00000;
border:none;
border-radius:8px;
color:#fff;
font-weight:bold;
cursor:pointer;
outline:none;
-webkit-tap-highlight-color:transparent;

transition:
transform .12s ease,
background .3s ease;

user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.modal-box button:active{
transform:scale(.94);
}

.alert{
width:90%;
max-width:700px;
margin:15px auto;
padding:14px;
border-radius:8px;
text-align:center;
font-weight:bold;
}

.alert-success{
background:#006b2d;
}

.alert-error{
background:#a10000;
}

footer{
margin-top:35px;
padding:22px;
text-align:center;
background:#0d0d0d;
border-top:1px solid #222;
color:#888;
font-size:13px;
}

@media(max-width:768px){
.logo{
font-size:17px;
}

.hero h1{
font-size:26px;
}

.hero img{
width:125px;
height:125px;
}

.hero p{
font-size:13px;
}

.post-card img.post-img{
height:160px;
}
}
.post-video{
width:100%;
height:185px;
object-fit:cover;
display:block;
background:#000;
border-bottom:1px solid #222;
}
.media-slider{
display:flex;
overflow-x:auto;
scroll-snap-type:x mandatory;
background:#000;
}

.media-slider::-webkit-scrollbar{
height:6px;
}

.media-slider::-webkit-scrollbar-thumb{
background:#444;
border-radius:10px;
}

.slide{
min-width:100%;
scroll-snap-align:start;
background:#000;
display:flex;
align-items:center;
justify-content:center;
}

.media-slider .post-img{
width:100%;
height:185px;
object-fit:cover;
display:block;
}

.media-slider .post-video{
width:100%;
height:185px;
object-fit:contain;
display:block;
background:#000;
}

.media-loading-spin{
width:34px!important;
height:34px!important;
border:4px solid #333!important;
border-top:4px solid red!important;
border-radius:50%!important;
animation:mediaSpin .8s linear infinite!important;
margin:15px auto!important;
display:block!important;
z-index:999!important;
}

@keyframes mediaSpin{
100%{transform:rotate(360deg);}
}

img:not(.no-loader),
video:not(.no-loader){
opacity:0;
transition:.3s;
}

img.media-loaded,
video.media-loaded{
opacity:1!important;
}

.media-slider iframe{
width:100%;
height:185px;
border:none;
background:#000;
display:block;
}

.menu-contact-mini{
position:fixed;
bottom:65px;
right:70px;
width:220px;
text-align:center;
background:transparent!important;
border:none!important;
box-shadow:none!important;
z-index:10000;

opacity:0;
transform:translateX(80px);
transition:
opacity .25s ease,
transform .35s ease;

pointer-events:none;
}

.side-menu.active .menu-contact-mini{
opacity:1;
transform:translateX(0);
transition-delay:.28s;

pointer-events:auto;
}

.menu-mini-banner{
width:42px;
height:42px;
object-fit:cover;
border-radius:8px;
display:block;
margin:0 auto 7px;
background:transparent!important;
border:none!important;
box-shadow:0 0 14px rgba(255,0,0,.45);
}

.menu-mini-email{
display:block!important;
background:transparent!important;
border:none!important;
box-shadow:none!important;
padding:0!important;
margin:2px 0!important;
color:#4da6ff!important;
font-size:11px!important;
line-height:1.4!important;
text-decoration:none!important;
cursor:none;
}

.menu-mini-email:hover{
color:#8dccff!important;
text-decoration:underline!important;
background:transparent!important;
cursor:none;
}

.side-body > a{
opacity:0;
transform:translateX(60px);
transition:
transform .35s ease,
opacity .35s ease,
background .3s ease;
outline:none;
-webkit-tap-highlight-color:transparent;

user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.side-body a:active{
transform:scale(.96);
}

.side-menu.active .side-body > a{
opacity:1;
transform:translateX(0);
}

.side-menu.active .side-body > a:nth-of-type(1){transition-delay:.05s;}
.side-menu.active .side-body > a:nth-of-type(2){transition-delay:.10s;}
.side-menu.active .side-body > a:nth-of-type(3){transition-delay:.15s;}
.side-menu.active .side-body > a:nth-of-type(4){transition-delay:.20s;}
.side-menu.active .side-body > a:nth-of-type(5){transition-delay:.25s;}
.side-menu.active .side-body > a:nth-of-type(6){transition-delay:.30s;}
.side-menu.active .side-body > a:nth-of-type(7){transition-delay:.35s;}
.side-menu.active .side-body > a:nth-of-type(8){transition-delay:.40s;}
.side-menu.active .side-body > a:nth-of-type(9){transition-delay:.45s;}
.side-menu.active .side-body > a:nth-of-type(10){transition-delay:.50s;}
.side-menu.active .side-body > a:nth-of-type(11){transition-delay:.60s;}

.trust-banner-section{
max-width:1000px;
margin:0 auto 35px;
padding:0 20px;
text-align:center;
}

.trust-title{
color:#ff2b2b;
font-size:22px;
margin-bottom:8px;
}

.trust-desc{
color:#ccc;
font-size:14px;
line-height:1.6;
margin-bottom:16px;
}

.trust-banner-box{
background:#080808;
border:1px solid rgba(255,0,0,.45);
border-radius:18px;
padding:8px;
box-shadow:0 0 25px rgba(255,0,0,.25);
overflow:hidden;
}

.trust-banner-img{
width:100%;
height:auto;
display:block;
border-radius:14px;
opacity:1!important;
}

@media(max-width:768px){
.trust-title{
font-size:18px;
}

.trust-desc{
font-size:12px;
}

.trust-banner-section{
margin-bottom:28px;
}
}

.scroll-indicator{
position:fixed;
left:50%;
bottom:20px;
transform:translateX(-50%);
display:flex;
flex-direction:column;
align-items:center;
z-index:999;
transition:.4s;
animation:scrollFloat 1.6s infinite ease-in-out;
}

.scroll-indicator.hide{
opacity:0;
pointer-events:none;
transform:translateX(-50%) translateY(20px);
}

.scroll-indicator span{
font-size:11px;
letter-spacing:2px;
color:#fff;
margin-bottom:6px;
opacity:.8;
}

.scroll-arrow{
width:22px;
height:38px;
border:2px solid rgba(255,255,255,.7);
border-radius:20px;
position:relative;
}

.scroll-arrow::before{
content:'';
position:absolute;
top:6px;
left:50%;
width:4px;
height:8px;
background:#ff2b2b;
border-radius:10px;
transform:translateX(-50%);
animation:wheelMove 1.3s infinite;
}

@keyframes wheelMove{
0%{opacity:0;top:6px;}
50%{opacity:1;}
100%{opacity:0;top:18px;}
}

@keyframes scrollFloat{
0%{transform:translateX(-50%) translateY(0);}
50%{transform:translateX(-50%) translateY(6px);}
100%{transform:translateX(-50%) translateY(0);}
}

.forgot-password{
margin-top:14px;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
gap:6px;
}

.forgot-password a{
color:#4da6ff;
font-size:13px;
text-decoration:none;
line-height:1.4;
outline:none;
-webkit-tap-highlight-color:transparent;

transition:
transform .12s ease,
color .3s ease;

display:inline-block;

user-select:none;
-webkit-user-select:none;
-webkit-touch-callout:none;
}

.forgot-password a:active{
transform:scale(.90);
}

.forgot-info{
font-size:11px;
color:#888;
line-height:1.4;
text-align:center;
}

.forgot-info1{
margin-top:14px;
font-size:11px;
color:#888;
line-height:1.4;
text-align:center;
}
.register-security{
text-align:center;
margin:20px 0 12px;
}

.register-security img{
width:100%;
max-width:260px;
height:auto;
background:grey;
opacity:.8;
border-radius:5px;
display:block;
margin:8px auto 12px;
user-select:none;
-webkit-user-select:none;
-webkit-user-drag:none;
-webkit-touch-callout:none;
pointer-events:none;
}
.register-securityy{
text-align:center;
margin:20px 0 -10px;
}

.register-securityy img{
width:100%;
max-width:260px;
height:auto;
background:grey;
opacity:.8;
display:block;
border-radius:5px;
margin:20px auto -10px;
user-select:none;
-webkit-user-select:none;
-webkit-user-drag:none;
-webkit-touch-callout:none;
pointer-events:none;
}

.hero-stats{
margin:20px auto 10px;
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
}

.hero-stats div{
background:rgba(255,0,0,.08);
border:1px solid rgba(255,0,0,.25);
padding:6px 8px;
border-radius:20px;
font-size:12px;
color:#ddd;
}

.view-all-posts{
margin-top:-20px;
margin-bottom:-10px;
text-align:center;
padding:10px 20px 35px;
}

.view-all-posts a{
display:inline-block;
padding:14px 30px;
background:#c00000;
color:#fff;
text-decoration:none;
border-radius:10px;
font-size:13px;
font-weight:bold;
box-shadow:0 0 20px rgba(255,0,0,.25);
transition:.3s;
}

.view-all-posts a:hover{
background:#ff2b2b;
transform:translateY(-2px);
}`;

const THEME_MODE_JS = `if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
}
document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("themeToggle");
    if(!btn) return;
    if(localStorage.getItem("theme") === "light"){
        btn.innerHTML = "☀️";
    }
    btn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme","light");
            btn.innerHTML = "☀️";
        }else{
            localStorage.setItem("theme","dark");
            btn.innerHTML = "🌙";
        }
    });
});`;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

const BUCKET_ROUTE = "/bucket";
const CDN = BUCKET_ROUTE;



/* ===========================
   AUTH SYSTEM - MENIRU POLA PHP SESSION
   Login PHP asli memakai $_SESSION['user_id'], $_SESSION['user_email'], $_SESSION['user_name'], $_SESSION['user_role'].
   Di Worker ini diganti menjadi cookie ids_session + tabel D1 auth_sessions.
=========================== */

function parseCookies(cookie = "") {
  const out = {};
  for (const part of String(cookie || "").split(";")) {
    const item = part.trim();
    if (!item) continue;
    const eq = item.indexOf("=");
    if (eq === -1) continue;
    const key = item.slice(0, eq).trim();
    const val = item.slice(eq + 1).trim();
    try { out[key] = decodeURIComponent(val); }
    catch (e) { out[key] = val; }
  }
  return out;
}

function randomToken(bytes = 32) {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function ensureAuthTables(env) {
  await env.DB.prepare(`
CREATE TABLE IF NOT EXISTS auth_sessions (
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  expires_at TEXT NOT NULL
)`).run();
}

function cookieHeader(token) {
  return `ids_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`;
}

function clearCookieHeader() {
  return `ids_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

async function sha256Text(text = "") {
  const data = new TextEncoder().encode(String(text));
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password) {
  return `sha256$${await sha256Text(password)}`;
}

function absoluteUrl(request, path = "/") {
  const base = new URL(request.url);
  return new URL(path, base.origin).toString();
}

function authEmailTemplate(title, message, buttonText, buttonUrl) {
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;background:#0d0d0d;font-family:Arial,sans-serif;color:#ffffff;padding:24px;">
  <div style="max-width:520px;margin:0 auto;background:#111111;border:1px solid #c00000;border-radius:16px;padding:24px;box-shadow:0 0 22px rgba(255,0,0,.18);">
    <h2 style="margin:0 0 14px;color:#ff2b2b;text-align:center;">${esc(title)}</h2>
    <p style="font-size:14px;line-height:1.7;color:#dddddd;text-align:center;margin:0 0 20px;">${esc(message)}</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${esc(buttonUrl)}" style="display:inline-block;background:#c00000;color:#ffffff;text-decoration:none;padding:13px 20px;border-radius:10px;font-weight:bold;">${esc(buttonText)}</a>
    </div>
    <p style="font-size:12px;line-height:1.6;color:#999999;margin:18px 0 0;">Jika tombol tidak bisa dibuka, salin link ini ke browser:<br>${esc(buttonUrl)}</p>
  </div>
</body>
</html>`;
}

async function sendResendEmail(env, { to, subject, html }) {
  const apiKey = env.RESEND_API_KEY || env.RESEND_KEY || "";
  if (!apiKey) {
    throw new Error("RESEND_API_KEY belum dipasang di Worker Secrets.");
  }

  const from = env.RESEND_FROM || "IDS ECU REPAIR <admin@idsrepair.com>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html
    })
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error("Gagal kirim email Resend: " + detail);
  }

  return true;
}

async function sendVerificationEmail(request, env, user) {
  const verifyUrl = absoluteUrl(
    request,
    `/auth/verify.php?token=${encodeURIComponent(user.token)}&email=${encodeURIComponent(user.email)}`
  );

  await sendResendEmail(env, {
    to: user.email,
    subject: "Verifikasi Email IDS ECU REPAIR",
    html: authEmailTemplate(
      "Verifikasi Email",
      `Halo ${user.nama}, klik tombol di bawah ini untuk mengaktifkan akun IDS ECU REPAIR. Link berlaku 20 menit.`,
      "VERIFIKASI AKUN",
      verifyUrl
    )
  });
}

async function sendResetPasswordEmail(request, env, user) {
  const resetUrl = absoluteUrl(
    request,
    `/auth/reset-password.php?token=${encodeURIComponent(user.token)}&email=${encodeURIComponent(user.email)}`
  );

  await sendResendEmail(env, {
    to: user.email,
    subject: "Reset Password IDS ECU REPAIR",
    html: authEmailTemplate(
      "Reset Password",
      `Halo ${user.nama}, klik tombol di bawah ini untuk membuat password baru. Link berlaku 20 menit.`,
      "RESET PASSWORD",
      resetUrl
    )
  });
}

async function verifyPassword(inputPassword, storedPassword) {
  const input = String(inputPassword || "");
  const stored = String(storedPassword || "");

  if (!input || !stored) return false;

  if (stored.startsWith("sha256$")) {
    const inputHash = await sha256Text(input);
    return stored === `sha256$${inputHash}`;
  }

  // Hash PHP lama password_hash(): $2y$ / bcrypt.
  // Worker editor Cloudflare tidak punya password_verify() PHP.
  // Akun lama perlu dimigrasi/reset ke format sha256$.
  if (stored.startsWith("$2y$") || stored.startsWith("$2a$") || stored.startsWith("$2b$")) {
    return false;
  }

  // Fallback hanya untuk data lama yang pernah tersimpan plaintext.
  return input === stored;
}

function htmlAuthMessage(title, message, status = 200) {
  return htmlResponse(pageWrap({
    title,
    body: `<div style="min-height:100vh;background:#0d0d0d;color:#fff;font-family:Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:20px;">
<div style="width:100%;max-width:420px;background:#111;border:1px solid #c00000;border-radius:16px;padding:24px;text-align:center;box-shadow:0 0 20px rgba(255,0,0,.15);">
<h2 style="color:#ff2b2b;margin-bottom:12px;">${esc(title)}</h2>
<p style="color:#ddd;line-height:1.7;margin-bottom:18px;">${esc(message)}</p>
<a href="/" style="display:inline-block;background:#c00000;color:#fff;text-decoration:none;padding:12px 18px;border-radius:10px;font-weight:bold;">Kembali ke Home</a>
</div>
</div>`
  }), status);
}

function redirectHomeWithError(request, key, message) {
  const url = new URL("/", request.url);
  url.searchParams.set(key, message);
  return Response.redirect(url, 302);
}

async function createSession(env, userId) {
  await ensureAuthTables(env);
  const token = randomToken(32);
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  await env.DB.prepare(
    "INSERT INTO auth_sessions (token,user_id,expires_at) VALUES (?,?,?)"
  ).bind(token, userId, expires).run();
  return token;
}

async function destroySession(request, env) {
  await ensureAuthTables(env);
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const token = cookies.ids_session || "";
  if (token) {
    await env.DB.prepare("DELETE FROM auth_sessions WHERE token=?").bind(token).run();
  }
}

async function getCurrentUser(request, env) {
  await ensureAuthTables(env);
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const token = cookies.ids_session || "";
  if (!token) return null;

  const row = await env.DB.prepare(`
SELECT tamu.id,tamu.nama,tamu.email,tamu.role,tamu.poin,tamu.foto_profil,tamu.is_verified
FROM auth_sessions
INNER JOIN tamu ON tamu.id = auth_sessions.user_id
WHERE auth_sessions.token = ?
AND auth_sessions.expires_at > ?
LIMIT 1`).bind(token, new Date().toISOString()).first();

  if (!row) return null;
  return row;
}

async function requireLogin(request, env) {
  const user = await getCurrentUser(request, env);
  return user || null;
}

function redirectToLogin(request) {
  const url = new URL("/", request.url);
  url.searchParams.set("login", "required");
  return Response.redirect(url, 302);
}

async function handleLogin(request, env) {
  if (request.method !== "POST") {
    return Response.redirect(new URL("/", request.url), 302);
  }

  const form = await request.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");

  if (!email || !password) {
    return redirectHomeWithError(request, "login_error", "Email dan password wajib diisi.");
  }

  const user = await env.DB.prepare(
    "SELECT id,nama,email,password,role,is_verified FROM tamu WHERE lower(email)=? LIMIT 1"
  ).bind(email).first();

  if (!user) {
    return redirectHomeWithError(request, "login_error", "Email atau password salah");
  }

  const ok = await verifyPassword(password, user.password);
  if (!ok) {
    return redirectHomeWithError(request, "login_error", "Email atau password salah");
  }

  if (Number(user.is_verified || 0) === 0) {
    return redirectHomeWithError(request, "login_error", "Akun Anda belum diverifikasi. Silakan cek email verifikasi.");
  }

  const token = await createSession(env, user.id);
  const headers = new Headers();
  headers.set("Location", "/");
  headers.append("Set-Cookie", cookieHeader(token));
  return new Response(null, { status: 302, headers });
}

async function handleLogout(request, env) {
  await destroySession(request, env);
  const headers = new Headers();
  headers.set("Location", "/");
  headers.append("Set-Cookie", clearCookieHeader());
  return new Response(null, { status: 302, headers });
}

async function handleRegister(request, env) {
  if (request.method !== "POST") {
    return Response.redirect(new URL("/", request.url), 302);
  }

  const form = await request.formData();
  const nama = String(form.get("nama") || "").trim();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const confirm = String(form.get("confirm") || "");

  if (!nama || !email || !password || !confirm) {
    return redirectHomeWithError(request, "register_error", "Semua data register wajib diisi.");
  }
  if (!/^[a-zA-Z0-9 ._-]+$/.test(nama)) {
    return redirectHomeWithError(request, "register_error", "Nama hanya boleh huruf, angka, spasi, titik, strip, dan garis bawah.");
  }
  if (password !== confirm) {
    return redirectHomeWithError(request, "register_error", "Password dan konfirmasi password tidak sama.");
  }
  if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return redirectHomeWithError(request, "register_error", "Password minimal 6 karakter, wajib ada huruf besar dan angka.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirectHomeWithError(request, "register_error", "Format email tidak valid.");
  }

  const namaExist = await env.DB.prepare("SELECT id FROM tamu WHERE nama=? LIMIT 1").bind(nama).first();
  if (namaExist) return redirectHomeWithError(request, "register_error", "Nama lengkap sudah digunakan.");

  const emailExist = await env.DB.prepare("SELECT id,is_verified FROM tamu WHERE lower(email)=? LIMIT 1").bind(email).first();
  if (emailExist) {
    if (Number(emailExist.is_verified || 0) === 0) {
      return redirectHomeWithError(request, "register_error", "Email sudah terdaftar tapi belum diverifikasi. Silakan cek email verifikasi.");
    }
    return redirectHomeWithError(request, "register_error", "Email sudah terdaftar.");
  }

  const passHash = await hashPassword(password);
  const tokenVerify = randomToken(24);
  const expired = new Date(Date.now() + 20 * 60 * 1000).toISOString();

  await env.DB.prepare(
    "INSERT INTO tamu (nama,email,password,role,poin,otp,otp_expired,is_verified) VALUES (?,?,?,?,?,?,?,?)"
  ).bind(nama, email, passHash, "tamu", 0, tokenVerify, expired, 0).run();

  try {
    await sendVerificationEmail(request, env, { nama, email, token: tokenVerify });
  } catch (e) {
    await env.DB.prepare("DELETE FROM tamu WHERE lower(email)=? AND is_verified=0").bind(email).run();
    return redirectHomeWithError(request, "register_error", e.message || "Gagal mengirim email verifikasi.");
  }

  return redirectHomeWithError(request, "register_success", "Pendaftaran berhasil. Link verifikasi sudah dikirim ke email Anda.");
}

async function handleForgotPassword(request, env) {
  if (request.method !== "POST") return Response.redirect(new URL("/", request.url), 302);

  const form = await request.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  if (!email) return redirectHomeWithError(request, "reset_error", "Email wajib diisi.");

  const user = await env.DB.prepare("SELECT id,nama,email,is_verified FROM tamu WHERE lower(email)=? LIMIT 1").bind(email).first();

  // Jangan bocorkan email terdaftar atau tidak. Pesan tetap sama.
  const okMessage = "Jika email terdaftar, link reset password sudah dikirim.";
  if (!user) return redirectHomeWithError(request, "reset_success", okMessage);

  if (Number(user.is_verified || 0) === 0) {
    return redirectHomeWithError(request, "reset_error", "Akun belum diverifikasi. Silakan verifikasi email terlebih dahulu.");
  }

  const token = randomToken(24);
  const expired = new Date(Date.now() + 20 * 60 * 1000).toISOString();
  await env.DB.prepare("UPDATE tamu SET otp=?, otp_expired=? WHERE id=?").bind(token, expired, user.id).run();

  try {
    await sendResetPasswordEmail(request, env, { nama: user.nama || "Member", email: user.email, token });
  } catch (e) {
    return redirectHomeWithError(request, "reset_error", e.message || "Gagal mengirim email reset password.");
  }

  return redirectHomeWithError(request, "reset_success", okMessage);
}

async function handleResetPassword(request, env) {
  const url = new URL(request.url);
  const email = String(url.searchParams.get("email") || "").trim().toLowerCase();
  const token = String(url.searchParams.get("token") || "").trim();

  if (request.method === "GET") {
    return htmlResponse(pageWrap({
      title: "Reset Password",
      body: `<div style="min-height:100vh;background:#0d0d0d;color:#fff;font-family:Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:20px;">
<div style="width:85%;max-width:320px;background:#111;border:1px solid #c00000;border-radius:15px;padding:25px;">
<h2 style="text-align:center;color:#ff2b2b;margin-bottom:20px;">Reset Password</h2>
<form method="POST" action="/auth/reset-password.php?token=${esc(token)}&email=${esc(email)}">
<input type="password" name="password" placeholder="Password baru" required style="width:100%;padding:13px;margin-bottom:14px;background:#1b1b1b;border:1px solid #333;border-radius:8px;color:#fff;box-sizing:border-box;">
<input type="password" name="confirm" placeholder="Ulangi password baru" required style="width:100%;padding:13px;margin-bottom:14px;background:#1b1b1b;border:1px solid #333;border-radius:8px;color:#fff;box-sizing:border-box;">
<button type="submit" style="width:100%;padding:13px;background:#c00000;border:none;border-radius:8px;color:#fff;font-weight:bold;">Ganti Password</button>
</form>
</div>
</div>`
    }));
  }

  const form = await request.formData();
  const password = String(form.get("password") || "");
  const confirm = String(form.get("confirm") || "");
  if (password !== confirm) return htmlAuthMessage("Reset gagal", "Password dan konfirmasi tidak sama.", 400);
  if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return htmlAuthMessage("Reset gagal", "Password minimal 6 karakter, wajib ada huruf besar dan angka.", 400);
  }

  const user = await env.DB.prepare(
    "SELECT id FROM tamu WHERE lower(email)=? AND otp=? AND otp_expired > ? LIMIT 1"
  ).bind(email, token, new Date().toISOString()).first();
  if (!user) return htmlAuthMessage("Reset gagal", "Link reset tidak valid atau sudah expired.", 400);

  const newHash = await hashPassword(password);
  await env.DB.prepare("UPDATE tamu SET password=?, otp=NULL, otp_expired=NULL WHERE id=?").bind(newHash, user.id).run();
  return htmlAuthMessage("Reset berhasil", "Password berhasil diganti. Silakan login kembali.");
}

async function handleVerify(request, env) {
  const url = new URL(request.url);
  const email = String(url.searchParams.get("email") || "").trim().toLowerCase();
  const token = String(url.searchParams.get("token") || "").trim();
  if (!email || !token) return htmlAuthMessage("Verifikasi gagal", "Tautan verifikasi tidak lengkap.", 400);

  const user = await env.DB.prepare("SELECT id,is_verified,otp_expired FROM tamu WHERE lower(email)=? AND otp=? LIMIT 1").bind(email, token).first();
  if (!user) return htmlAuthMessage("Verifikasi gagal", "Token atau email tidak valid.", 400);
  if (Number(user.is_verified || 0) === 1) return htmlAuthMessage("Akun sudah aktif", "Akun sudah terverifikasi. Silakan login.");
  if (user.otp_expired && new Date(user.otp_expired).getTime() < Date.now()) {
    await env.DB.prepare("DELETE FROM tamu WHERE id=? AND is_verified=0").bind(user.id).run();
    return htmlAuthMessage("Verifikasi gagal", "Link verifikasi sudah expired. Silakan daftar ulang.", 400);
  }

  await env.DB.prepare("UPDATE tamu SET is_verified=1, otp=NULL, otp_expired=NULL WHERE id=?").bind(user.id).run();
  return htmlAuthMessage("Verifikasi berhasil", "Akun berhasil diverifikasi. Silakan login.");
}


export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/index.php" || path.endsWith("/index.php")) {
      const cleanPath = path === "/index.php" ? "/" : path.replace(/index\.php$/, "");
      url.pathname = cleanPath;
      return Response.redirect(url.toString(), 301);
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    try {
      if (path === "/") return handleHome(request, env);
      if (path === "/posts/repair/" || path === "/posts/repair") return handleRepair(request, env);
      if (path === "/posts/view_repair/" || path === "/posts/view_repair") return handleViewRepair(request, env);
      if (path === "/posts/ecu_files/" || path === "/posts/ecu_files") return handleEcuFiles(request, env);
      if (path === "/posts/download_ecu.php" || path === "/posts/download_ecu/" || path === "/posts/download_ecu") return handleDownloadEcu(request, env);
      if (path === "/posts/create_repair/" || path === "/posts/create_repair") return handleCreateRepair(request, env);
      if (path === "/dashboard/" || path === "/dashboard") return handleDashboard(request, env);
      if (path === "/dashboard/my_posts/" || path === "/dashboard/my_posts") return handleMyPosts(request, env);
      if (path === "/dashboard/profile/" || path === "/dashboard/profile") return handleProfile(request, env);
      if (path === "/dashboard/change_password.php") return handleChangePassword(request, env);
      if (path === "/auth/login.php") return handleLogin(request, env);
      if (path === "/auth/logout.php" || path === "/auth/logout") return handleLogout(request, env);
      if (path === "/auth/register.php") return handleRegister(request, env);
      if (path === "/auth/forgot-password.php") return handleForgotPassword(request, env);
      if (path === "/auth/reset-password.php") return handleResetPassword(request, env);
      if (path === "/auth/verify.php") return handleVerify(request, env);
      if (path === "/sport/" || path === "/sport") return handleSport();
      if (path === "/sport/fighter-awaludin/" || path === "/sport/fighter-awaludin") return handleFighter();
      if (path === "/ai-ecu/" || path === "/ai-ecu") return handleAiEcu();
      if (path === "/ai-ecu/ai_reply.php") return handleAiReply(request);
      if (path === "/remap/" || path === "/remap") return handleRemap(request);
      if (path === "/remap/admin/" || path === "/remap/admin") return handleAdminRemap(request, env);
      if (path === "/panduan-read-and-write-ecu/" || path === "/panduan-read-and-write-ecu") return handlePanduan();
      if (path === "/panduan-read-and-write-ecu/remap-prosedur-order/" || path === "/panduan-read-and-write-ecu/remap-prosedur-order") return handleProsedur();

      return new Response("Not Found", { status: 404 });
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  }
};

async function handleBucketObject(request, env) {
  const bucket = getR2Bucket(env);
  if (!bucket) return new Response("R2 bucket binding belum ada", { status: 500 });

  const url = new URL(request.url);
  const key = cleanBucketKey(decodeURIComponent(url.pathname.replace(/^\/bucket\//, "")), "");
  if (!key || key.includes("..")) return new Response("Bad Request", { status: 400 });

  const object = await bucket.get(key);
  if (!object) return new Response("File tidak ditemukan", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(object.body, { headers });
}

function pageWrap({ title, head = "", body = "", styles = "", scripts = "" }) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<style>${THEME_CSS}</style>
${styles ? `<style>${styles}</style>` : ""}
${head}
</head>
<body>
${body}
<script>${THEME_MODE_JS}</script>
${scripts ? `<script>${scripts}</script>` : ""}
</body>
</html>`;
}

function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function nl2brEsc(s = "") {
  return esc(s).replace(/\n/g, "<br>");
}

function getYoutubeId(url = "") {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&?/]+)/);
  return m ? m[1] : "";
}

function cleanBucketKey(value = "", folder = "") {
  let v = String(value || "").trim();
  if (!v) return "";

  // Kalau sudah berupa route /bucket/key atau URL lama, ambil key bucket saja.
  const cdnPrefix = `${CDN}/`;
  if (v.startsWith(cdnPrefix)) v = v.slice(cdnPrefix.length);
  else if (/^https?:\/\//i.test(v)) {
    try { v = new URL(v).pathname; } catch (e) {}
  }

  v = String(v).replace(/^\/+/, "");
  v = v.replace(/^bucket\//i, "");

  // Bersihkan path lama Termux/Apache supaya semua baca dari bucket R2.
  v = v.replace(/^uploads\//i, "");
  v = v.replace(/^uploads\/repairs\//i, "repairs/");
  v = v.replace(/^uploads\/videos\//i, "videos/");
  v = v.replace(/^uploads\/ecu_files\//i, "ecu_files/");
  v = v.replace(/^uploads\/profile\//i, "profile/");
  v = v.replace(/^uploads\/og_images\//i, "og_images/");

  if (folder && !v.startsWith(folder + "/")) {
    v = `${folder}/${v.replace(/^\/+/, "")}`;
  }

  return v.replace(/\/+/g, "/");
}

function mediaCloudUrl(value, folder) {
  const key = cleanBucketKey(value, folder);
  return key ? `${CDN}/${key}` : "";
}

function bucketPublicUrl(key = "") {
  const clean = cleanBucketKey(key, "");
  return clean ? `${CDN}/${clean}` : "";
}


function getR2Bucket(env) {
  return env.BUCKET || env.R2 || env.R2_BUCKET || env.IDS_BUCKET || null;
}

function safeFileExt(filename = "", fallback = "jpg") {
  const clean = String(filename || "").toLowerCase();
  const m = clean.match(/\.([a-z0-9]{2,8})$/);
  return m ? m[1] : fallback;
}

function isAllowedImageType(file) {
  const type = String(file?.type || "").toLowerCase();
  const name = String(file?.name || "").toLowerCase();
  return type.startsWith("image/") || /\.(jpg|jpeg|png|webp|gif)$/i.test(name);
}

function r2KeyFromCdnUrl(url = "") {
  return cleanBucketKey(url, "");
}

async function deleteOldProfilePhoto(env, oldPhotoUrl = "") {
  const bucket = getR2Bucket(env);
  if (!bucket) return;
  const oldKey = r2KeyFromCdnUrl(oldPhotoUrl);
  if (!oldKey) return;
  if (!oldKey.startsWith("profile/")) return;
  try { await bucket.delete(oldKey); } catch (e) {}
}

async function uploadProfilePhoto(env, userId, file, oldPhotoUrl = "") {
  if (!file || !file.size) return String(oldPhotoUrl || "");
  if (!isAllowedImageType(file)) throw new Error("Format foto profil harus JPG, PNG, WEBP, atau GIF.");
  if (file.size > 5 * 1024 * 1024) throw new Error("Ukuran foto profil maksimal 5MB.");

  const bucket = getR2Bucket(env);
  if (!bucket) throw new Error("Binding R2 belum ditemukan. Tambahkan binding BUCKET ke Worker.");

  const ext = safeFileExt(file.name, "jpg");

  // SESUAI STRUKTUR BUCKET IDS REPAIR:
  // idsrepair-images/profile/
  const key = `profile/user-${userId}-${Date.now()}-${randomToken(4)}.${ext}`;

  await bucket.put(key, file.stream(), {
    httpMetadata: { contentType: file.type || "image/jpeg" },
    customMetadata: {
      user_id: String(userId),
      type: "profile_photo"
    }
  });

  await deleteOldProfilePhoto(env, oldPhotoUrl);

  return key;
}

function isValidUpload(file) {
  return file && typeof file === "object" && Number(file.size || 0) > 0;
}

function safeNamePart(name = "file") {
  return String(name || "file")
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "file";
}

async function uploadToBucket(env, folder, file, options = {}) {
  if (!isValidUpload(file)) return null;

  const bucket = getR2Bucket(env);
  if (!bucket) throw new Error("Binding R2 belum ditemukan. Tambahkan binding BUCKET ke Worker.");

  const maxSize = options.maxSize || (80 * 1024 * 1024);
  if (file.size > maxSize) throw new Error(`${options.label || "File"} maksimal ${Math.round(maxSize / 1024 / 1024)}MB.`);

  if (options.allowedExt && options.allowedExt.length) {
    const extCheck = safeFileExt(file.name, "").toLowerCase();
    if (!options.allowedExt.includes(extCheck)) {
      throw new Error(`${options.label || "File"} hanya boleh format: ${options.allowedExt.join(", ").toUpperCase()}.`);
    }
  }

  if (options.imageOnly && !isAllowedImageType(file)) {
    throw new Error(`${options.label || "Gambar"} harus JPG, PNG, WEBP, atau GIF.`);
  }

  const ext = safeFileExt(file.name, options.fallbackExt || "bin").toLowerCase();
  const base = safeNamePart(file.name.replace(/\.[^.]+$/, ""));
  const key = `${folder}/${Date.now()}-${randomToken(4)}-${base}.${ext}`;

  await bucket.put(key, file.stream(), {
    httpMetadata: { contentType: file.type || options.contentType || "application/octet-stream" },
    customMetadata: options.metadata || {}
  });

  return { key, url: `${CDN}/${key}`, original: file.name || `${base}.${ext}`, size: file.size || 0 };
}

async function insertRepairPost(env, data) {
  const base = {
    user_id: data.user_id,
    author: data.author,
    title: data.title,
    content: data.content,
    image: data.image || "",
    video: data.video || "",
    youtube_url: data.youtube_url || "",
    og_image: data.og_image || "",
    ecu_file: data.ecu_file || "",
    ecu_file_original: data.ecu_file_original || "",
    pinned: 0
  };

  const tryInsert = async (withSize) => {
    const cols = Object.keys(base).concat(withSize ? ["ecu_file_size"] : []);
    const vals = Object.values(base).concat(withSize ? [data.ecu_file_size || 0] : []);
    const placeholders = cols.map(() => "?").join(",");
    return env.DB.prepare(`INSERT INTO repair_posts (${cols.join(",")}) VALUES (${placeholders})`).bind(...vals).run();
  };

  try {
    return await tryInsert(true);
  } catch (e) {
    if (String(e.message || "").toLowerCase().includes("ecu_file_size")) {
      return await tryInsert(false);
    }
    throw e;
  }
}

async function handleHome(request, env) {
  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/markdown")) {
    return new Response(
`# IDS Repair
Selamat datang di IDS Repair. Pusat panduan read and write ECU, remap prosedur order, dan perbaikan elektronik otomotif.

## Menu Utama
- [Panduan Read & Write ECU](/panduan-read-and-write-ecu/)
- [Prosedur Order Remap](/panduan-read-and-write-ecu/remap-prosedur-order/)
`, { headers: { "Content-Type": "text/markdown; charset=utf-8", "x-markdown-tokens": "150" } });
  }

  const currentUser = await getCurrentUser(request, env);
  const url = new URL(request.url);
  const loginError = url.searchParams.get("login_error") || "";
  const registerError = url.searchParams.get("register_error") || "";
  const registerSuccess = url.searchParams.get("register_success") || "";
  const resetError = url.searchParams.get("reset_error") || "";
  const resetSuccess = url.searchParams.get("reset_success") || "";
  const totalPost = await env.DB.prepare("SELECT COUNT(*) AS total FROM repair_posts").first();
  const totalMember = await env.DB.prepare("SELECT COUNT(*) AS total FROM tamu").first();

  const latest = await env.DB.prepare(`
SELECT 
repair_posts.*,
tamu.nama AS nama_author,
tamu.foto_profil,
COUNT(repair_comments.id) AS total_comments
FROM repair_posts
LEFT JOIN tamu ON tamu.id = repair_posts.user_id
LEFT JOIN repair_comments ON repair_comments.repair_id = repair_posts.id
GROUP BY repair_posts.id
ORDER BY repair_posts.pinned DESC, repair_posts.id DESC
LIMIT 5
`).all();

  const postsHtml = (latest.results || []).map(p => {
    const images = (p.image || "").split(",").map(x => x.trim()).filter(Boolean);
    const slides = [];

    for (const img of images) {
      const imgSrc = mediaCloudUrl(img, "repairs");
      slides.push(`<div class="slide"><a href="/posts/view_repair/?id=${p.id}"><img class="post-img" src="${esc(imgSrc)}" loading="lazy" alt="uploads ecu repair"></a></div>`);
    }

    if (p.video) {
      const v = mediaCloudUrl(p.video, "videos");
      slides.push(`<div class="slide"><video class="post-video" controls playsinline preload="none"><source src="${esc(v)}" type="video/mp4"></video></div>`);
    }

    if (p.youtube_url) {
      const yt = getYoutubeId(p.youtube_url);
      if (yt) {
        slides.push(`<div class="slide"><iframe class="post-video" loading="lazy" src="https://www.youtube-nocookie.com/embed/${esc(yt)}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`);
      }
    }

    const fileBox = p.ecu_file ? `
<div class="ecu-file-box">
  <div class="ecu-file-left">
    <div class="ecu-file-icon">📦</div>
    <div class="ecu-file-info">
      <div class="ecu-file-name">${esc(p.ecu_file_original || p.ecu_file)}</div>
      <div class="ecu-file-size">${formatBytes(p.ecu_file_size || 0)}</div>
    </div>
  </div>
  ${currentUser ? `<a href="/posts/download_ecu.php?id=${p.id}" class="ecu-download-btn">⬇</a>` : `<a href="/" onclick="openLoginModal();return false;" class="ecu-lock-btn">🔒</a>`}
</div>` : "";

    return `
<div class="post-card">
  <div class="media-slider">${slides.join("")}</div>
  <div class="post-content">
    ${Number(p.pinned) === 1 ? `<div style="display:inline-block;background:#c00000;color:#fff;padding:5px 10px;border-radius:8px;font-size:11px;margin-bottom:8px;font-weight:bold;">📌 POSTINGAN TERSEMAT</div>` : ""}
    <h3><a href="/posts/view_repair/?id=${p.id}">${esc(p.title || "")}</a></h3>
    <p>${nl2brEsc(String(p.content || "").slice(0,120))}...</p>
    ${fileBox}
    <div class="post-info">
      <img class="author-img" src="${esc(mediaCloudUrl(p.foto_profil || "default-profile.png", "css"))}" loading="lazy" alt="Author Profile">
      <div>
        ${esc(p.nama_author || p.author || "")}<br>
        ${formatDate(p.created_at)}
      </div>
    </div>
    <a class="comment-link" href="/posts/view_repair/?id=${p.id}#comments">💬 ${Number(p.total_comments || 0)} komentar</a>
  </div>
</div>`;
  }).join("");

  const body = `
<header>
<div class="logo">IDS ECU REPAIR</div>
<div style="display:flex;align-items:center;gap:22px;">
<button id="themeToggle" class="theme-toggle" type="button">☀️</button>
<div class="menu-button" onclick="openMenu()">☰</div>
</div>
</header>

<div class="side-menu" id="sideMenu">
<div class="side-header">
<h2>MENU</h2>
<div class="close-btn" onclick="closeMenu()">×</div>
</div>
<div class="side-body">
<a href="/sport/">🏆 Sport</a>
<a href="/posts/repair/">🛠 Semua Posting ECU</a>
<a href="/posts/ecu_files/">📦 List File ECU</a>
<a href="/panduan-read-and-write-ecu/">🚀 Layanan Remap ECU</a>
<a href="/panduan-read-and-write-ecu/remap-prosedur-order/">📘 Prosedur Remap ECU</a>
<a href="/ai-ecu/">🤖 Tanya AI ECU</a>
${currentUser ? `<a href="/dashboard/">👤 Dashboard</a>
<a href="/dashboard/my_posts/">📄 Postingan Saya</a>
<a href="/posts/create_repair/">➕ Buat Posting ECU</a>
${currentUser.role === "admin" ? `<a href="/remap/admin/">🖥 Admin Panel</a>` : ""}
<a href="/auth/logout.php">🚪 Logout</a>` : `<a href="#" onclick="openLoginModal();closeMenu();return false;">🔐 Login</a>
<a href="#" onclick="openRegisterModal();closeMenu();return false;">📝 Register</a>`}

<div class="menu-contact-mini">
<img src="/css/ecu-logo.png" alt="LOGO IDS Repair" class="menu-mini-banner" loading="lazy" decoding="async">
<a class="menu-mini-email" href="mailto:admin@idsrepair.com">admin@idsrepair.com</a>
<a class="menu-mini-email" href="mailto:cs@idsrepair.com">cs@idsrepair.com</a>
</div>
</div>
</div>

${registerSuccess ? `<div class="alert alert-success">${esc(registerSuccess)}</div>` : ""}
${registerError ? `<div class="alert alert-error">${esc(registerError)}</div>` : ""}
${resetSuccess ? `<div class="alert alert-success">${esc(resetSuccess)}</div>` : ""}
${resetError ? `<div class="alert alert-error">${esc(resetError)}</div>` : ""}
<section class="hero">
${currentUser ? `
<h4 style="font-size:20px;margin-bottom:8px;color:#fff;">Selamat Datang, ${esc(currentUser.nama || "Member")} 👋</h4>
<p>Semoga harimu menyenangkan. Silakan lihat update posting ECU terbaru, dokumentasi repair, file ECU, dan diskusi teknisi di forum IDS ECU REPAIR SOPPENG.</p>
` : `
<div class="hero-banner">
<img src="/bucket/css/ecu-logo.png" alt="IDS ecu Repair Soppeng">
</div>
<h1>IDS ECU REPAIR</h1>
<p>Forum komunitas repair ECU Indonesia. Tempat berbagi hasil diagnosa, pengalaman repair ECU, troubleshooting kendaraan, diskusi teknisi, dan dokumentasi pekerjaan ECU mobil Indonesia.</p>
<div class="hero-stats">
<div>✔ ${Number(totalPost?.total || 0).toLocaleString("id-ID")} Posting ECU</div>
<div>✔ 200+ Anggota</div>
<div>✔ Update Harian</div>
</div>
<button onclick="openLoginModal()">MASUK FORUM</button>
`}
<div class="scroll-indicator" id="scrollIndicator">
<span>SCROLL</span>
<div class="scroll-arrow"></div>
</div>
</section>

<h2 class="section-title">🛠 Posting ECU Terbaru</h2>
<section class="post-section">${postsHtml || `<p style="color:#888;padding:20px;">Belum ada posting ECU.</p>`}</section>

<div class="view-all-posts">
<a href="/posts/repair/">📚 LIHAT SEMUA POSTINGAN ECU</a>
</div>

<section class="trust-banner-section">
<div class="trust-banner-box">
<img src="/bucket/gallery/banner-trusted-ai-ready.png" alt="IDS ECU Repair teruji terpercaya SEO Google dan AI Agent Ready" loading="lazy" class="trust-banner-img">
</div>
</section>

<div class="info-section">
<div class="info-card">
<h2>Tentang IDS ECU REPAIR</h2>
<p>IDS ECU REPAIR adalah ruang dokumentasi dan komunitas teknisi untuk berbagi hasil repair ECU, diagnosa kerusakan ECU, IMMO, ABS, EPS, BCM, TCM, ETAC serta solusi elektronik kendaraan.</p>
</div>

<div class="info-card">
<h2>Layanan Utama</h2>
<div class="service-grid">
<div class="service-box">🛠 <b>Repair ECU</b><br>ECU mati total, no start, short jalur, regulator, dan kerusakan komponen.</div>
<div class="service-box">⚡ <b>Cloning ECU</b><br>Pemindahan data ECU lama ke ECU pengganti.</div>
<div class="service-box">🔐 <b>IMMO</b><br>Penanganan immobilizer bermasalah untuk kebutuhan repair.</div>
<div class="service-box">📟 <b>Diagnosa DTC</b><br>Diskusi kode error, no communication, CKP/CMP, dan fault ECU.</div>
<div class="service-box">🚀 <b>Peningkatan daya ECU</b><br>Layanan tuning dan remap ECU diesel & bensin untuk meningkatkan performa dan efisiensi kendaraan.</div>
<div class="service-box">💾 <b>Read & Write ECU</b><br>Panduan pembacaan dan penulisan data ECU dengan prosedur aman dan backup original file.</div>
</div>
</div>

<div class="info-card">
<h2>Galeri IDS</h2>
<p>Beberapa dokumentasi pekerjaan dan aktivitas repair ECU.</p>
<div class="gallery-grid">
<img src="/bucket/gallery/ecu1.jpg" loading="lazy" alt="IDS Repair">
<img src="/bucket/gallery/ecu2.jpg" loading="lazy" alt="IDS Repair">
<img src="/bucket/gallery/ecu3.jpg" loading="lazy" alt="IDS Repair">
<video controls><source src="/bucket/gallery/video1.mp4" type="video/mp4"></video>
</div>
</div>

<div class="info-card">
<h2>📍 Detail Lokasi Servis ECU Terdekat</h2>
<p>
IDS ECU REPAIR SOPPENG melayani repair ECU mobil, truck, dan alat berat,
cloning ECU, IMMO, diagnosa kerusakan elektronik kendaraan,
dan file ECU tuning untuk berbagai jenis kendaraan.

<br><br>

<b>
Jl. Poros Maros - Soppeng No.30,
Appanang, Kec. Lili Riaja,
Kabupaten Soppeng,
Sulawesi Selatan 90861
</b>

<br><br>

Kami menerima konsultasi kerusakan ECU,
no start, injector mati, no communication,
kerusakan jalur ECU, dan berbagai masalah elektronik kendaraan lainnya.

<br><br>

📞 WhatsApp:
<a href="https://wa.me/6282346783838" target="_blank" style="color:#25D366;text-decoration:none;">0823-4678-3838</a>

<br><br>

🗺️ Google Maps:
<a href="https://maps.app.goo.gl/bzv5ZUoat9ThzHX36" target="_blank" style="color:#ff3c3c;text-decoration:none;">Lihat Lokasi Workshop</a>
</p>
</div>
</div>

<div class="modal" id="loginModal">
<div class="modal-box">
<div class="modal-close" onclick="closeLoginModal()">×</div>
<h2>LOGIN</h2>
${loginError ? `<div class="alert alert-error" style="width:100%;margin:0 0 14px;padding:12px;border-radius:8px;">${esc(loginError)}</div>` : ""}
<form method="POST" action="/auth/login.php">
<input type="email" name="email" placeholder="Email" required>
<input type="password" name="password" placeholder="Password" required>
<button type="submit">MASUK</button>
</form>
<div class="forgot-password">
<a href="#" onclick="openForgotModal();return false;">🔑 Lupa password?</a>
<div class="forgot-info">Ganti password melalui email akun.</div>
</div>
</div>
</div>

<div class="modal" id="forgotModal">
<div class="modal-box">
<div class="modal-close" onclick="closeForgotModal()">×</div>
<h2>RESET PASSWORD</h2>
<form method="POST" action="/auth/forgot-password.php">
<input type="email" name="email" placeholder="Email akun" required>
<button type="submit">KIRIM LINK RESET</button>
</form>
<div class="forgot-info1">Reset password melalui email terdaftar.</div>
</div>
</div>

<div class="modal" id="registerModal">
<div class="modal-box">
<div class="modal-close" onclick="closeRegisterModal()">×</div>
<h2>REGISTER</h2>
<form method="POST" action="/auth/register.php">
<input type="text" name="nama" placeholder="Nama Lengkap" required>
<input type="email" name="email" placeholder="Email" required>
<input type="password" name="password" placeholder="Buat Password Akun" required>
<input type="password" name="confirm" placeholder="Konfirmasi Password Akun" required>
<button type="submit">DAFTAR</button>
</form>
</div>
</div>

<footer>© 2025 IDS ECU REPAIR SOPPENG</footer>`;

  const scripts = `
function openMenu(){document.getElementById('sideMenu').classList.add('active');}
function closeMenu(){document.getElementById('sideMenu').classList.remove('active');}
function openLoginModal(){document.getElementById('loginModal').classList.add('active');document.getElementById('registerModal').classList.remove('active');}
function closeLoginModal(){document.getElementById('loginModal').classList.remove('active');}
function openRegisterModal(){document.getElementById('registerModal').classList.add('active');document.getElementById('loginModal').classList.remove('active');}
function closeRegisterModal(){document.getElementById('registerModal').classList.remove('active');}
function openForgotModal(){document.getElementById('loginModal').classList.remove('active');document.getElementById('forgotModal').classList.add('active');}
function closeForgotModal(){document.getElementById('forgotModal').classList.remove('active');}
${loginError ? `setTimeout(function(){openLoginModal();},60);` : ""}
window.onclick = function(e){
const login = document.getElementById('loginModal');
const register = document.getElementById('registerModal');
const forgot = document.getElementById('forgotModal');
if(e.target == login){closeLoginModal();}
if(e.target == register){closeRegisterModal();}
if(e.target == forgot){closeForgotModal();}
};

const scrollIndicator = document.getElementById("scrollIndicator");
window.addEventListener("scroll", function(){
    const scrollTop = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    if(scrollTop > pageHeight - 200){scrollIndicator.classList.add("hide");}
    else if(scrollTop > 120){scrollIndicator.classList.add("hide");}
    else{scrollIndicator.classList.remove("hide");}
});

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("img:not(.no-loader)").forEach(function(img){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        img.parentNode.insertBefore(loader, img);
        function selesai(){img.classList.add("media-loaded");loader.remove();}
        img.addEventListener("load", selesai);
        img.addEventListener("error", selesai);
        if(img.complete && img.naturalWidth > 0){selesai();}
    });
    document.querySelectorAll("video:not(.no-loader)").forEach(function(video){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        video.parentNode.insertBefore(loader, video);
        function selesai(){video.classList.add("media-loaded");loader.remove();}
        video.addEventListener("loadeddata", selesai);
        video.addEventListener("error", selesai);
        if(video.readyState >= 2){selesai();}
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (window.navigator && window.navigator.modelContext && typeof window.navigator.modelContext.provideContext === 'function') {
        try {
            window.navigator.modelContext.provideContext({
                tools: [
                    {
                        name: "baca_panduan_idsrepair",
                        description: "Mengambil ringkasan materi panduan read and write ECU serta prosedur order remap di IDS Repair.",
                        inputSchema: {
                            type: "object",
                            properties: {
                                kategori: { type: "string", enum: ["ecu", "remap", "umum"], description: "Kategori panduan yang ingin dicari oleh agen AI." }
                            },
                            required: ["kategori"]
                        },
                        async execute({ kategori }) {
                            let rincian = "Selamat datang di IDS Repair. Hubungi kami untuk prosedur order.";
                            if (kategori === "ecu") rincian = "Panduan membaca dan menulis data ECU (Read & Write) aman menggunakan alat flasher standar industri.";
                            else if (kategori === "remap") rincian = "Prosedur order remap file ECU wajib menyertakan data nomor software dan file backup asli bawaan mesin.";
                            return { content: [{ type: "text", text: rincian }] };
                        }
                    }
                ]
            });
        } catch (e) {}
    }
});`;

  return htmlResponse(pageWrap({
    title: "IDS ECU REPAIR SOPPENG | Forum Repair ECU Indonesia",
    head: `
<meta name="description" content="IDS ECU REPAIR SOPPENG adalah forum komunitas teknisi ECU Indonesia untuk berbagi pengalaman repair ECU, diagnosa kerusakan elektronik kendaraan, troubleshooting, dokumentasi pekerjaan dan diskusi otomotif.">
<meta name="theme-color" content="#c00000">
<meta name="keywords" content="Ids Repair, ECU Repair Indonesia, Servis ecu terdekat, servis ecu makassar, mks ecu repair, otomotif diesel makassar, File ECU, IMMO OFF, Cloning ECU, Repair ECU Soppeng, ECU Diesel, ECU Mobil, ECU Denso, ECU Bosch, Forum ECU Indonesia, Teknisi ECU">
<link rel="canonical" href="https://idsrepair.com/">
<link rel="icon" href="/bucket/css/ecu-logo.png" type="image/png">
<style>${HOME_CSS}</style>`,
    body,
    scripts
  }));
}

async function handleRepair(request, env) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const currentUser = await getCurrentUser(request, env);

  let sql = `
SELECT 
repair_posts.*,
tamu.nama AS nama_author,
tamu.foto_profil
FROM repair_posts
LEFT JOIN tamu ON tamu.id = repair_posts.user_id
`;
  let bind = [];
  if (q) {
    sql += ` WHERE repair_posts.title LIKE ? OR repair_posts.content LIKE ?`;
    bind = [`%${q}%`, `%${q}%`];
  }
  sql += ` ORDER BY repair_posts.pinned DESC, repair_posts.id DESC`;

  let stmt = env.DB.prepare(sql);
  for (const v of bind) stmt = stmt.bind(v);
  const rows = await stmt.all();

  const postsHtml = (rows.results || []).map((row, idx) => {
    const locked = !currentUser && idx >= 5;
    const images = (row.image || "").split(",").map(s => s.trim()).filter(Boolean);
    const yt = getYoutubeId(row.youtube_url || "");
    const slides = [];

    for (const img of images) {
      slides.push(`<div class="slide"><a href="/posts/view_repair/?id=${row.id}"><img class="post-img" loading="lazy" src="${esc(mediaCloudUrl(img, "repairs"))}"></a></div>`);
    }
    if (row.video) {
      slides.push(`<div class="slide"><video class="post-video" controls playsinline preload="none"><source src="${esc(mediaCloudUrl(row.video, "videos"))}" type="video/mp4"></video></div>`);
    }
    if (yt) {
      slides.push(`<div class="slide"><iframe class="post-video" loading="lazy" src="https://www.youtube.com/embed/${esc(yt)}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`);
    }

    const ecuFile = row.ecu_file ? `
<div class="ecu-file-box">
<div class="ecu-file-left">
<div class="ecu-file-icon">📦</div>
<div class="ecu-file-info">
<div class="ecu-file-name">${esc(row.ecu_file_original || row.ecu_file)}</div>
<div class="ecu-file-size">${formatBytes(row.ecu_file_size || 0)}</div>
</div>
</div>
${currentUser ? `<a href="/posts/download_ecu.php?id=${row.id}" class="ecu-download-btn">⬇</a>` : `<a href="/" class="ecu-download-btn" style="background:#333;color:#aaa;" onclick="alert('Login dulu untuk download file ECU');return false;">🔒</a>`}
</div>` : "";

    return `
<div class="post ${locked ? "locked-post" : ""}" id="post${row.id}">
${locked ? `<div class="lock-overlay"><div>🔒<br>Login atau buat akun<br>untuk melihat postingan ini<br><br><a href="/">Masuk / Daftar</a></div></div>` : ""}
${slides.length ? `<div class="media-slider">${slides.join("")}</div>` : ""}
<div class="content">
${Number(row.pinned) === 1 ? `<div style="display:inline-block;background:#c00000;color:#fff;padding:5px 10px;border-radius:8px;font-size:11px;margin-bottom:8px;font-weight:bold;">📌 POSTINGAN TERSEMAT</div>` : ""}
<a href="/posts/view_repair/?id=${row.id}" style="text-decoration:none;color:inherit;"><div class="title">${esc(row.title || "")}</div></a>
<div class="desc">${nl2brEsc(row.content || "")}</div>
${ecuFile}
<div class="info">
<img src="${esc(mediaCloudUrl(row.foto_profil || "default-profile.png", "css"))}" loading="lazy" class="author-img" alt="Author">
<div>
<div class="author-name">${esc(row.nama_author || row.author || "")}</div>
<div class="author-date">${formatDate(row.created_at)}</div>
</div>
</div>
<button type="button" class="comment-toggle" onclick="toggleComment(${row.id})">💬 Komentar</button>
<a href="/posts/view_repair/?id=${row.id}#detail-komentar" class="comment-toggle" style="text-decoration:none;margin-left:6px;">Buka Detail</a>
<div class="comment-section" id="commentBox${row.id}">
<h3>Komentar</h3>
<p style="color:#777;font-size:13px;">Buka detail untuk melihat komentar lengkap.</p>
<a href="/" class="login-link">Login untuk komentar</a>
</div>
</div>
</div>`;
  }).join("");

  const styles = `
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#0d0d0d;font-family:Arial,sans-serif;color:#fff;}
.navbar{position:sticky;top:0;z-index:999;background:#111;border-bottom:1px solid #222;padding:12px 15px;display:flex;align-items:center;justify-content:space-between;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}
.navbar .logo{font-weight:bold;margin-left:14px;color:#ff2b2b;font-size:17px;letter-spacing:1px;}
.nav-right{display:flex;gap:8px;align-items:center;}
.nav-btn{background:#1c1c1c;border:1px solid #333;color:#fff;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:12px;}
.nav-btn:hover{background:#ff2b2b;}
.container{width:100%;max-width:750px;margin:auto;padding:15px;}
.post{background:#161616;border:1px solid #242424;border-radius:14px;overflow:hidden;margin-bottom:18px;position:relative;}
.post-img{width:100%;max-height:420px;object-fit:cover;border-radius:8px;margin-bottom:10px;border:1px solid #333;}
.post-video{width:100%;max-height:420px;border-radius:14px;margin-bottom:15px;background:#000;object-fit:cover;}
.content{padding:14px;}
.title{font-size:18px;font-weight:bold;color:#ff3c3c;margin-bottom:10px;line-height:1.4;}
.desc{font-size:14px;color:#d2d2d2;line-height:1.7;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}
.info{margin-top:14px;font-size:12px;color:#888;display:flex;align-items:center;gap:8px;}
.author-img{width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid #ff2b2b;}
.author-name{color:#fff;font-size:13px;}
.author-date{color:#888;font-size:11px;}
.comment-toggle{display:inline-block;margin-top:12px;background:#1b1b1b;border:1px solid #333;color:#ff3c3c;padding:8px 12px;border-radius:8px;font-size:13px;cursor:pointer;}
.comment-toggle:hover{background:#222;}
.comment-section{display:none;margin-top:12px;background:#101010;border-radius:10px;padding:12px;}
.comment-section.active{display:block;}
.comment-section h3{font-size:15px;margin-bottom:12px;color:#ff3c3c;}
.comment-item{background:#1a1a1a;padding:10px;border-radius:8px;margin-bottom:10px;}
.comment-item b{font-size:13px;color:#ff4d4d;}
.comment-item p{margin-top:5px;font-size:13px;line-height:1.6;color:#ccc;}
.comment-item small{font-size:11px;color:#777;}
textarea{width:100%;height:80px;resize:none;outline:none;background:#1b1b1b;border:1px solid #333;border-radius:8px;padding:10px;color:#fff;font-size:13px;margin-top:10px;}
button{background:#c00000;border:none;padding:10px 14px;color:#fff;border-radius:8px;margin-top:10px;cursor:pointer;font-size:13px;font-weight:bold;}
button:hover{background:#ff2b2b;}
.login-link{color:#ff3c3c;font-size:13px;text-decoration:none;}
.empty{padding:50px 20px;text-align:center;color:#777;}
.comment-top{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
.comment-avatar{width:38px;height:38px;border-radius:50%;object-fit:cover;border:1px solid #444;background:#111;}
.comment-name{font-size:13px;font-weight:bold;color:#fff;}
.comment-date{font-size:11px;color:#888;}
.comment-text{font-size:13px;line-height:1.7;color:#ccc;margin-left:48px;}
.ecu-file-box{margin-top:18px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;}.ecu-file-left{display:flex;align-items:center;gap:10px;overflow:hidden;min-width:0;}.ecu-file-icon{width:42px;height:42px;border-radius:10px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}.ecu-file-info{overflow:hidden;min-width:0;}.ecu-file-name{font-size:13px;font-weight:bold;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px;}.ecu-file-size{font-size:11px;color:#888;margin-top:3px;}.ecu-download-btn{width:48px;height:48px;border-radius:12px;background:#c00000;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;font-size:18px;flex-shrink:0;}.ecu-download-btn:hover{background:#ff2b2b;}
.media-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;background:#000;}
.media-slider::-webkit-scrollbar{height:6px;}
.media-slider::-webkit-scrollbar-thumb{background:#444;border-radius:10px;}
.slide{min-width:100%;scroll-snap-align:start;background:#000;display:flex;align-items:center;justify-content:center;}
.media-slider .post-img{width:100%;height:420px;object-fit:cover;border-radius:0;margin-bottom:0;border:none;display:block;}
.media-slider .post-video{width:100%;height:420px;object-fit:contain;border-radius:0;margin-bottom:0;border:none;background:#000;display:block;}
.locked-post > *:not(.lock-overlay){filter:blur(6px);pointer-events:none;user-select:none;}
.lock-overlay{position:absolute;inset:0;z-index:20;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;font-weight:bold;font-size:15px;padding:20px;}
.lock-overlay a{display:inline-block;background:#c00000;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;font-size:13px;}
.search-modal{display:none;position:fixed;top:60px;left:0;width:100%;padding:8px 12px;z-index:99;background:none;}
.search-modal.active{display:block;}
.search-popup{max-width:750px;margin:auto;background:#111;border:1px solid #c00000;border-radius:10px;padding:10px;}
.search-form{display:flex;gap:8px;align-items:center;}
.search-form input{flex:1;height:28px;background:#1b1b1b;border:1px solid #333;border-radius:8px;padding:0 10px;color:#fff;font-size:13px;-webkit-appearance:none;appearance:none;}
.search-submit{height:22px;padding:0 14px;background:#c00000;border:none;border-radius:8px;color:#fff;margin:0;}
.search-reset{height:22px;padding:0 10px;background:#222;border:1px solid #333;border-radius:8px;color:#fff;text-decoration:none;display:flex;align-items:center;justify-content:center;}
@media(max-width:600px){.logo{font-size:15px;}.nav-btn{font-size:11px;padding:7px 10px;}.container{padding:10px;}.title{font-size:16px;}.desc{font-size:13px;}.post-img{max-height:240px;}.ecu-file-name{max-width:170px;}.media-slider .post-img,.media-slider .post-video{height:260px;}}
`;

  const body = `
<div class="navbar">
<div class="logo">IDS ECU REPAIR</div>
<div class="nav-right">
<a href="#" class="nav-btn" onclick="openSearch();return false;">🔍 Cari</a>
<a href="/" class="nav-btn">Home</a>
<a href="/posts/create_repair/" class="nav-btn">+ Posting</a>
</div>
</div>

<div class="container">
${postsHtml || `<div class="empty">Belum ada posting ECU.</div>`}
</div>

<div class="search-modal" id="searchModal">
<div class="search-popup">
<form method="GET" action="/posts/repair/" class="search-form">
<input type="text" name="q" placeholder="Cari postingan ECU..." value="${esc(q)}">
<button type="submit" class="search-submit">🔍</button>
<a href="/posts/repair/" class="search-reset">🛠️</a>
</form>
</div>
</div>`;

  const scripts = `
function toggleComment(id){
    const box = document.getElementById('commentBox' + id);
    if(box){ box.classList.toggle('active'); }
}
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("img:not(.no-loader)").forEach(function(img){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        img.parentNode.insertBefore(loader, img);
        function selesai(){ img.classList.add("media-loaded"); if(loader) loader.remove(); }
        img.addEventListener("load", selesai);
        img.addEventListener("error", selesai);
        if(img.complete && img.naturalWidth > 0){ selesai(); }
    });
    document.querySelectorAll("video:not(.no-loader)").forEach(function(video){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        video.parentNode.insertBefore(loader, video);
        function selesai(){ video.classList.add("media-loaded"); if(loader) loader.remove(); }
        video.addEventListener("loadeddata", selesai);
        video.addEventListener("error", selesai);
        if(video.readyState >= 2){ selesai(); }
    });
});
function openSearch(){
  const modal = document.getElementById('searchModal');
  modal.classList.toggle('active');
}
document.addEventListener('click', function(e){
  const modal = document.getElementById('searchModal');
  const searchBtn = document.querySelector('.nav-right a[onclick*="openSearch"]');
  if(!modal || !searchBtn) return;
  if(modal.classList.contains('active') && !modal.contains(e.target) && !searchBtn.contains(e.target)){
    modal.classList.remove('active');
  }
});
`;

  return htmlResponse(pageWrap({ title: "Posting ECU Repair | IDS ECU REPAIR SOPPENG", styles, body, scripts }));
}

async function handleViewRepair(request, env) {
  const url = new URL(request.url);
  const id = Number(url.searchParams.get("id") || 0);
  const currentUser = await getCurrentUser(request, env);
  if (!id) return Response.redirect(new URL("/", request.url), 301);

  const post = await env.DB.prepare(`
SELECT repair_posts.*, tamu.nama AS nama_author, tamu.foto_profil
FROM repair_posts
LEFT JOIN tamu ON tamu.id = repair_posts.user_id
WHERE repair_posts.id = ?
LIMIT 1`).bind(id).first();

  if (!post) return Response.redirect(new URL("/", request.url), 301);

  const comments = await env.DB.prepare(`
SELECT repair_comments.*, tamu.nama AS nama_komentar, tamu.foto_profil
FROM repair_comments
LEFT JOIN tamu ON tamu.id = repair_comments.user_id
WHERE repair_comments.repair_id = ?
ORDER BY repair_comments.id ASC`).bind(id).all();

  const jumlahKomentar = comments.results?.length || 0;
  const images = (post.image || "").split(",").map(x => x.trim()).filter(Boolean);
  const slides = [];

  for (const img of images) {
    slides.push(`<div class="slide"><img class="post-img" src="${esc(mediaCloudUrl(img, "repairs"))}" alt="${esc(post.title || "")}"></div>`);
  }
  if (post.video) {
    slides.push(`<div class="slide"><video class="post-video" controls playsinline preload="metadata"><source src="${esc(mediaCloudUrl(post.video, "videos"))}" type="video/mp4"></video></div>`);
  }
  if (post.youtube_url) {
    const yt = getYoutubeId(post.youtube_url);
    if (yt) {
      slides.push(`<div class="slide"><iframe class="post-video" src="https://www.youtube.com/embed/${esc(yt)}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`);
    }
  }

  const commentsHtml = jumlahKomentar ? comments.results.map(c => `
<div class="comment-item">
<div class="comment-top">
<img src="${esc(mediaCloudUrl(c.foto_profil || "default-profile.png", "css"))}" class="comment-avatar">
<div>
<div class="comment-name">${esc(c.nama_komentar || c.user_name || "")}</div>
<small class="comment-date">${formatDate(c.created_at)}</small>
</div>
</div>
<p class="comment-text">${nl2brEsc(c.comment || "")}</p>
</div>`).join("") : `<p style="color:#777;font-size:13px;">Belum ada komentar.</p>`;

  const ecuFile = post.ecu_file ? `
<div class="ecu-file-box">
<div class="ecu-file-left">
<div class="ecu-file-icon">📦</div>
<div class="ecu-file-info">
<div class="ecu-file-name">${esc(post.ecu_file_original || post.ecu_file)}</div>
<div class="ecu-file-size">${formatBytes(post.ecu_file_size || 0)}</div>
</div>
</div>
${currentUser ? `<a href="/posts/download_ecu.php?id=${post.id}" class="ecu-download-btn">⬇ Download File</a>` : `<a href="/" class="ecu-lock-btn" onclick="alert('Login dulu untuk download file ECU');return false;">🔒 Login untuk Download</a>`}
</div>` : "";

  const styles = `
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#0d0d0d;color:#fff;font-family:'Orbitron',sans-serif;overflow-x:hidden;font-size:14px;}
.header{background:#111;padding:12px 15px;border-bottom:1px solid #222;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:999;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}
.header .logo{font-size:17px;margin-left:15px;font-weight:bold;color:#ff2b2b;letter-spacing:1px;}
.nav a{display:inline-block;padding:8px 12px;background:#1b1b1b;border:1px solid #333;border-radius:8px;color:#fff;text-decoration:none;font-size:12px;margin-left:6px;}
.nav a:hover{background:#c00000;}
.container{width:100%;max-width:750px;margin:auto;padding:15px;}
.post-card{background:#161616;border:1px solid #242424;border-radius:14px;overflow:hidden;position:relative;}
.media-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;background:#000;height:360px;}
.media-slider::-webkit-scrollbar-thumb{background:#444;border-radius:10px;}
.slide{min-width:100%;height:360px;scroll-snap-align:start;background:#000;display:flex;align-items:center;justify-content:center;}
.post-img,.post-video,.media-slider .post-video,.media-slider iframe{width:100%;height:100%;object-fit:contain;display:block;background:#000;border:none;}
.content{padding:14px;}
.pin-label{display:inline-block;background:#c00000;color:#fff;padding:5px 10px;border-radius:8px;font-size:11px;margin-bottom:8px;font-weight:bold;}
.post-title{font-size:22px;font-weight:600;color:#ff2b2b;margin-bottom:12px;line-height:1.5;}
.post-info{margin-top:14px;margin-bottom:14px;font-size:12px;color:#888;display:flex;align-items:center;gap:8px;}
.author-img{width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid #ff2b2b;}
.author-name{color:#fff;font-size:13px;}
.author-date{color:#888;font-size:11px;}
.post-content{font-size:14px;line-height:1.8;color:#ccc;word-break:break-word;}
.ecu-file-box{margin-top:18px;background:#1b1b1b;border:1px solid #2a2a2a;border-radius:14px;padding:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;}
.ecu-file-left{display:flex;align-items:center;gap:12px;overflow:hidden;}
.ecu-file-icon{width:42px;height:42px;border-radius:10px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
.ecu-file-info{overflow:hidden;}
.ecu-file-name{font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px;}
.ecu-file-size{font-size:11px;color:#888;margin-top:4px;}
.ecu-lock-btn{background:#333;color:#aaa;padding:10px 14px;border-radius:10px;text-decoration:none;font-size:12px;font-weight:bold;}
footer{margin-top:25px;padding:20px;text-align:center;background:#111;border-top:1px solid #222;color:#777;font-size:13px;}
.comment-section{margin-top:18px;background:#101010;border-radius:10px;padding:12px;}
.comment-section h3{font-size:15px;margin-bottom:12px;color:#ff3c3c;}
.comment-item{background:#1a1a1a;padding:10px;border-radius:8px;margin-bottom:10px;}
.comment-top{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
.comment-avatar{width:38px;height:38px;border-radius:50%;object-fit:cover;border:1px solid #444;background:#111;}
.comment-name{font-size:13px;font-weight:bold;color:#fff;}
.comment-date{font-size:11px;color:#888;}
.comment-text{font-size:13px;line-height:1.7;color:#ccc;margin-left:48px;}
textarea{width:100%;height:80px;resize:none;outline:none;background:#1b1b1b;border:1px solid #333;border-radius:8px;padding:10px;color:#fff;font-size:13px;margin-top:10px;}
button{background:#c00000;border:none;padding:10px 14px;color:#fff;border-radius:8px;margin-top:10px;cursor:pointer;font-size:13px;font-weight:bold;}
.login-link{color:#ff3c3c;font-size:13px;text-decoration:none;}
@media(max-width:600px){.logo{font-size:15px;}.nav a{font-size:11px;padding:7px 10px;}.container{padding:10px;}.post-title{font-size:19px;}.post-content{font-size:13px;}.post-img,.post-video{height:260px;}.ecu-file-name{max-width:170px;}.media-slider iframe{height:260px;}}
`;

  const body = `
<div class="header">
<div class="logo">IDS ECU REPAIR</div>
<div class="nav">
<a href="/">Home</a>
<a href="/posts/repair/">Semua Posting</a>
</div>
</div>

<div class="container">
<div class="post-card">
${Number(post.pinned) === 1 ? `<div class="content" style="padding-bottom:0;"><div class="pin-label">📌 POSTINGAN TERSEMAT</div></div>` : ""}
${slides.length ? `<div class="media-slider">${slides.join("")}</div>` : ""}
<div class="content">
<h1 class="post-title">${esc(post.title || "")}</h1>

<div class="post-info">
<img src="${esc(mediaCloudUrl(post.foto_profil || "default-profile.png", "css"))}" class="author-img" alt="Foto profil">
<div>
<div class="author-name">${esc(post.nama_author || post.author || "Member")}</div>
<div class="author-date">${formatDate(post.created_at)}</div>
</div>
</div>

<div class="post-content">${nl2brEsc(post.content || "")}</div>

<div id="comments" class="comment-section">
<h3>💬 Komentar (${jumlahKomentar})</h3>
${commentsHtml}
<a href="/" class="login-link">Login untuk komentar</a>
</div>

${ecuFile}
</div>
</div>
</div>

<footer>© 2025 IDS ECU REPAIR SOPPENG</footer>`;

  const scripts = `
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("img:not(.no-loader)").forEach(function(img){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        img.parentNode.insertBefore(loader, img);
        function selesai(){img.classList.add("media-loaded");if(loader) loader.remove();}
        img.addEventListener("load", selesai);
        img.addEventListener("error", selesai);
        if(img.complete && img.naturalWidth > 0){selesai();}
    });
    document.querySelectorAll("video:not(.no-loader)").forEach(function(video){
        let loader = document.createElement("div");
        loader.className = "media-loading-spin";
        video.parentNode.insertBefore(loader, video);
        function selesai(){video.classList.add("media-loaded");if(loader) loader.remove();}
        video.addEventListener("loadeddata", selesai);
        video.addEventListener("error", selesai);
        if(video.readyState >= 2){selesai();}
    });
});`;

  return htmlResponse(pageWrap({
    title: `${esc(post.title || "")} | IDS ECU REPAIR`,
    styles,
    body,
    scripts
  }));
}

async function handleEcuFiles(request, env) {
  const currentUser = await getCurrentUser(request, env);
  const rows = await env.DB.prepare(`
SELECT repair_posts.*, tamu.nama AS nama_author
FROM repair_posts
LEFT JOIN tamu ON tamu.id = repair_posts.user_id
WHERE repair_posts.ecu_file IS NOT NULL AND repair_posts.ecu_file != ''
ORDER BY repair_posts.pinned DESC, repair_posts.id DESC
`).all();

  const list = (rows.results || []).map((row, idx) => {
    const locked = !currentUser && idx >= 5;
    return `
<div class="file-card ${locked ? "locked-file" : ""}">
${locked ? `<div class="lock-overlay"><div>🔒<br>Login atau buat akun<br>untuk melihat file ECU ini<br><br><a href="/">Masuk / Daftar</a></div></div>` : ""}
<a class="file-title" href="/posts/repair/#post${row.id}">${esc(row.title || "")}</a>
<div class="file-info">👨‍🔧 ${esc(row.nama_author || row.author || "")} • ${formatDate(row.created_at)}</div>
<div class="file-box">
<div class="file-left">
<div class="file-icon">📦</div>
<div>
<div class="file-name">${esc(row.ecu_file_original || row.ecu_file)}</div>
<div class="ecu-file-size">${formatBytes(row.ecu_file_size || 0)}</div>
</div>
</div>
${currentUser ? `<a href="/posts/download_ecu.php?id=${row.id}" class="download-btn">⬇</a>` : `<a href="/" class="download-btn" style="background:#333;color:#aaa;" onclick="alert('Silakan login dulu untuk download file ECU');return false;">🔒</a>`}
</div>
</div>`;
  }).join("");

  const styles = `
body{margin:0;background:#0d0d0d;color:#fff;font-family:Arial;}
.navbar{background:#111;padding:10px 15px;background:#0d0d0d;border-bottom:2px solid #c00000;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:999;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}
.navbar .logo{color:#ff2b2b;margin-left:14px;font-weight:bold;font-size:17px;letter-spacing:1px;}
.nav-btn{background:#1c1c1c;border:1px solid #333;color:white;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:12px;}
.container{max-width:750px;margin:auto;padding:15px;}
.file-card{background:#161616;border:1px solid #242424;border-radius:12px;padding:12px;margin-bottom:12px;position:relative;overflow:hidden;}
.file-title{color:#ff3c3c;font-weight:bold;font-size:15px;text-decoration:none;}
.file-info{font-size:12px;color:#888;margin-top:6px;}
.file-box{margin-top:12px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;}
.file-left{display:flex;align-items:center;gap:10px;overflow:hidden;}
.file-icon{width:42px;height:42px;border-radius:10px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
.file-name{font-size:13px;font-weight:bold;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:190px;}
.ecu-file-size{font-size:11px;color:#888;margin-top:3px;}
.download-btn{width:40px;height:40px;border-radius:10px;background:#c00000;display:flex;align-items:center;justify-content:center;text-decoration:none;color:white;font-size:17px;flex-shrink:0;}
.empty{text-align:center;padding:50px 20px;color:#777;}
.locked-file > *:not(.lock-overlay){filter:blur(6px);pointer-events:none;user-select:none;}
.lock-overlay{position:absolute;inset:0;z-index:20;background:rgba(0,0,0,.58);display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;font-weight:bold;font-size:15px;padding:20px;}
.lock-overlay a{display:inline-block;margin-top:10px;background:#c00000;color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;font-size:13px;}
`;

  const body = `
<div class="navbar">
<div class="logo">📦 File ECU</div>
<a href="/" class="nav-btn">Home</a>
</div>
<div class="container">
${list || `<div class="empty">Belum ada file ECU.</div>`}
</div>`;

  return htmlResponse(pageWrap({ title: "File ECU", styles, body }));
}

async function handleDownloadEcu(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return redirectToLogin(request);

  const url = new URL(request.url);
  const id = Number(url.searchParams.get("id") || 0);
  if (!id) return new Response("File tidak ditemukan", { status: 404 });

  const post = await env.DB.prepare(
    "SELECT id, ecu_file, ecu_file_original FROM repair_posts WHERE id=? AND ecu_file IS NOT NULL AND ecu_file != '' LIMIT 1"
  ).bind(id).first();

  if (!post || !post.ecu_file) return new Response("File tidak ditemukan", { status: 404 });

  const key = cleanBucketKey(String(post.ecu_file || "").trim(), "ecu_files");
  const bucket = getR2Bucket(env);
  if (!bucket) return new Response("R2 bucket binding belum ada", { status: 500 });

  const object = await bucket.get(key);
  if (!object) return new Response("File tidak ditemukan di bucket", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Content-Type", headers.get("Content-Type") || "application/octet-stream");
  headers.set("Content-Disposition", `attachment; filename="${String(post.ecu_file_original || key.split("/").pop() || "ecu-file.zip").replace(/"/g, "")}"`);
  headers.set("Cache-Control", "private, max-age=0, no-store");

  return new Response(object.body, { headers });
}

async function handleCreateRepair(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return redirectToLogin(request);

  if (request.method === "POST") {
    try {
      const form = await request.formData();
      const title = String(form.get("title") || "").trim();
      const content = String(form.get("content") || "").trim();
      const youtubeUrl = String(form.get("youtube_url") || "").trim();

      if (!title || !content) throw new Error("Judul dan isi posting wajib diisi.");

      const imageFiles = form.getAll("image[]").filter(isValidUpload).slice(0, 10);
      const uploadedImages = [];
      for (const file of imageFiles) {
        if (!isAllowedImageType(file)) throw new Error("Foto repair harus JPG, PNG, WEBP, atau GIF.");
        const up = await uploadToBucket(env, "repairs", file, { imageOnly: true, maxSize: 10 * 1024 * 1024, label: "Foto repair", fallbackExt: "jpg" });
        if (up) uploadedImages.push(up.key);
      }

      const videoFile = form.get("video");
      const videoUp = isValidUpload(videoFile)
        ? await uploadToBucket(env, "videos", videoFile, { allowedExt: ["mp4", "webm", "ogg"], maxSize: 80 * 1024 * 1024, label: "Video repair", fallbackExt: "mp4" })
        : null;

      const ecuFile = form.get("ecu_file");
      const ecuUp = isValidUpload(ecuFile)
        ? await uploadToBucket(env, "ecu_files", ecuFile, { allowedExt: ["zip", "rar"], maxSize: 80 * 1024 * 1024, label: "File ECU", fallbackExt: "zip" })
        : null;

      await insertRepairPost(env, {
        user_id: user.id,
        author: user.nama || user.email || "Member",
        title,
        content,
        image: uploadedImages.join(","),
        video: videoUp ? videoUp.key : "",
        youtube_url: youtubeUrl,
        og_image: uploadedImages[0] || "",
        ecu_file: ecuUp ? ecuUp.key : "",
        ecu_file_original: ecuUp ? ecuUp.original : "",
        ecu_file_size: ecuUp ? ecuUp.size : 0
      });

      return Response.redirect(new URL("/dashboard/my_posts/", request.url), 302);
    } catch (e) {
      return htmlAuthMessage("Posting gagal", e.message || "Upload ke bucket gagal.", 400);
    }
  }

  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{margin:0;background:#0f0f0f;color:white;font-family:Arial,sans-serif;}.header{background:#151515;padding:15px;font-size:22px;font-weight:bold;border-bottom:2px solid red;}.container{width:95%;max-width:700px;margin:25px auto;}.form-box{background:#1a1a1a;padding:20px;border-radius:12px;border:1px solid #2a2a2a;}input,textarea{width:100%;padding:14px;margin-bottom:15px;border:none;border-radius:8px;background:#2a2a2a;color:white;box-sizing:border-box;}textarea{min-height:180px;resize:vertical;}button{background:red;color:white;border:none;padding:14px 20px;border-radius:8px;cursor:pointer;width:100%;font-size:16px;font-weight:bold;}button:hover{background:#ff2b2b;}.back{display:inline-block;margin-bottom:15px;color:#ff3c3c;text-decoration:none;}.label{font-size:13px;color:#aaa;margin-bottom:6px;display:block;}.note{font-size:12px;color:#777;margin-top:-8px;margin-bottom:14px;line-height:1.5;}#uploadBox{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.88);z-index:9999;justify-content:center;align-items:center;flex-direction:column;}.upload-card{width:85%;max-width:340px;background:#1b1b1b;padding:20px;border-radius:14px;border:1px solid #333;text-align:center;}`;
  const body = `
<div class="header">➕ Buat Posting ECU</div>
<div class="container">
<a href="/" class="back">Kembali</a>
<div class="form-box">
<form method="POST" enctype="multipart/form-data">
<input type="text" name="title" placeholder="Judul Posting ECU" required>
<textarea name="content" placeholder="Isi posting ECU..." required></textarea>
<label class="label">Upload Foto Repair</label>
<input type="file" name="image[]" accept="image/*" multiple>
<div class="note">Tersimpan langsung ke bucket R2 folder repairs/. Format gambar: JPG, PNG, WEBP, GIF. Bisa upload maksimal 10 gambar sekaligus. OG image otomatis memakai gambar pertama.</div>
<label class="label">Upload Video Repair</label>
<input type="file" name="video" accept="video/mp4,video/webm,video/ogg">
<div class="note">Tersimpan langsung ke bucket R2 folder videos/. Format video: MP4, WEBM, OGG. Maksimal 80MB.</div>
<label class="label">Link Video YouTube</label>
<input type="url" name="youtube_url" placeholder="https://www.youtube.com/watch?v=xxxxx">
<div class="note">Opsional. Tempel link YouTube agar video tampil di postingan tanpa upload file video.</div>
<label class="label">Upload File ECU (.ZIP / .RAR)</label>
<input type="file" name="ecu_file" accept=".zip,.rar">
<div class="note">Tersimpan langsung ke bucket R2 folder ecu_files/. File ECU wajib ZIP/RAR. Maksimal 80MB.</div>
<button type="submit">POSTING SEKARANG</button>
</form>
</div>
</div>`;
  return htmlResponse(pageWrap({ title: "Buat Posting ECU", styles, body }));
}

async function handleDashboard(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return redirectToLogin(request);
  const userId = user.id;
  const totalPosting = await env.DB.prepare("SELECT COUNT(*) AS total FROM repair_posts WHERE user_id=?").bind(userId).first();
  const totalFile = await env.DB.prepare("SELECT COUNT(*) AS total FROM repair_posts WHERE user_id=? AND ecu_file!=''").bind(userId).first();
  const totalKomentar = await env.DB.prepare(`
SELECT COUNT(repair_comments.id) AS total
FROM repair_comments
INNER JOIN repair_posts ON repair_posts.id = repair_comments.repair_id
WHERE repair_posts.user_id=?`).bind(userId).first();

  let totalRemapOrders = { total: 0 };
  let remapNotifications = { results: [] };
  let myRemapOrders = { results: [] };
  let myCompletedRemapFiles = { results: [] };
  try {
    totalRemapOrders = await env.DB.prepare("SELECT COUNT(*) AS total FROM remap_orders WHERE user_id=? OR email=?").bind(userId, user.email || "").first();
  } catch(e) {}
  try {
    myRemapOrders = await env.DB.prepare("SELECT * FROM remap_orders WHERE user_id=? OR email=? ORDER BY id DESC LIMIT 6").bind(userId, user.email || "").all();
  } catch(e) {}
  try {
    myCompletedRemapFiles = await env.DB.prepare("SELECT * FROM remap_orders WHERE (user_id=? OR email=?) AND result_file IS NOT NULL AND result_file!='' ORDER BY id DESC LIMIT 6").bind(userId, user.email || "").all();
  } catch(e) {}
  try {
    remapNotifications = await env.DB.prepare("SELECT * FROM remap_notifications WHERE user_id=? OR email=? ORDER BY id DESC LIMIT 5").bind(userId, user.email || "").all();
  } catch(e) {}

  const myPosts = await env.DB.prepare(`
SELECT repair_posts.*, COUNT(repair_comments.id) AS total_comments
FROM repair_posts
LEFT JOIN repair_comments ON repair_comments.repair_id = repair_posts.id
WHERE repair_posts.user_id=?
GROUP BY repair_posts.id
ORDER BY repair_posts.id DESC
LIMIT 6`).bind(userId).all();

  const latestComments = await env.DB.prepare(`
SELECT repair_comments.*, repair_posts.title AS post_title, repair_posts.id AS post_id, tamu.nama AS nama_komentar, tamu.foto_profil
FROM repair_comments
INNER JOIN repair_posts ON repair_posts.id = repair_comments.repair_id
LEFT JOIN tamu ON tamu.id = repair_comments.user_id
WHERE repair_posts.user_id=?
ORDER BY repair_comments.id DESC
LIMIT 5`).bind(userId).all();

  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:#0d0d0d;color:#fff;font-family:Arial,sans-serif;overflow-x:hidden;}.header{position:sticky;top:0;z-index:999;background:#111;border-bottom:2px solid #c00000;padding:9px 14px;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.header .logo{color:#ff2b2b;font-size:17px;font-weight:bold;margin-left:14px;letter-spacing:1px;}.user-menu{display:flex;align-items:center;gap:10px;background:#1a1a1a;padding:2px 6px;border-radius:50px;cursor:pointer;}.profile-img{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid #ff2b2b;}.user-name{font-size:13px;font-weight:bold;}.user-role{font-size:11px;color:#999;}.dropdown-menu{position:fixed;top:75px;right:18px;width:280px;background:#111;border:1px solid #222;border-radius:15px;overflow:hidden;display:none;z-index:9999;}.dropdown-menu.active{display:block;}.dropdown-profile{padding:20px;text-align:center;border-bottom:1px solid #222;}.dropdown-img{width:75px;height:75px;border-radius:50%;object-fit:cover;border:3px solid #ff2b2b;margin-bottom:10px;}.dropdown-profile h3{font-size:16px;margin-bottom:4px;}.dropdown-profile p{font-size:12px;color:#999;}.dropdown-links a{display:block;padding:13px 18px;text-decoration:none;color:#ddd;border-bottom:1px solid #1d1d1d;font-size:14px;}.dropdown-links a:hover{background:#1d1d1d;color:#ff2b2b;}.logout-btn{color:#ff4d4d!important;}.container{max-width:1100px;margin:auto;padding:18px;}.hero-panel{background:#141414;border:1px solid #222;border-radius:16px;padding:18px;margin-bottom:18px;display:flex;gap:15px;align-items:center;}.hero-panel img{width:78px;height:78px;border-radius:50%;object-fit:cover;border:3px solid #ff2b2b;}.hero-panel h1{font-size:22px;color:#ff2b2b;margin-bottom:8px;}.hero-panel p{font-size:14px;color:#ccc;line-height:1.6;}.quick-actions{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:18px;}.action-btn{background:#c00000;color:#fff;text-decoration:none;padding:14px;border-radius:12px;text-align:center;font-size:13px;font-weight:bold;}.action-btn.dark{background:#1b1b1b;border:1px solid #333;}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:18px;}.stat-card{background:#141414;border:1px solid #222;border-radius:15px;padding:18px;text-align:center;}.stat-card h2{font-size:30px;color:#ff2b2b;margin-bottom:6px;}.stat-card p{font-size:13px;color:#aaa;}.section{background:#141414;border:1px solid #222;border-radius:16px;padding:18px;margin-bottom:18px;}.section h2{color:#ff2b2b;font-size:20px;margin-bottom:15px;}.posts-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:15px;}.post-card{background:#1b1b1b;border:1px solid #2a2a2a;border-radius:14px;overflow:hidden;padding:12px;}.media-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;background:#000;border-radius:10px;margin-bottom:10px;}.slide{min-width:100%;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;background:#000;}.post-img{width:100%;height:170px;object-fit:cover;display:block;}.post-video{width:100%;height:170px;object-fit:contain;display:block;background:#000;}.post-title{display:block;color:#fff;text-decoration:none;font-size:15px;font-weight:bold;line-height:1.4;margin-bottom:8px;}.post-title:hover{color:#ff2b2b;}.post-desc{font-size:13px;color:#bbb;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:10px;}.post-meta{font-size:11px;color:#888;display:flex;justify-content:space-between;gap:8px;}.comment-item{background:#1b1b1b;border:1px solid #2a2a2a;border-radius:12px;padding:12px;margin-bottom:10px;}.comment-top{display:flex;align-items:center;gap:10px;margin-bottom:8px;}.comment-top img{width:36px;height:36px;border-radius:50%;object-fit:cover;border:1px solid #444;}.comment-name{font-size:13px;font-weight:bold;color:#fff;}.comment-date{font-size:11px;color:#777;}.comment-text{font-size:13px;color:#ccc;line-height:1.6;margin-bottom:8px;}.comment-post{font-size:12px;color:#ff3c3c;text-decoration:none;}.empty{color:#888;font-size:13px;padding:10px 0;}.order-list{display:flex;flex-direction:column;gap:12px;}.order-card{background:#1b1b1b;border:1px solid #2a2a2a;border-radius:14px;padding:14px;margin-bottom:12px;}.order-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:10px;}.order-title{font-size:15px;font-weight:bold;color:#fff;line-height:1.4;}.order-date{font-size:11px;color:#888;margin-top:4px;}.order-info{display:grid;gap:6px;background:#111;border:1px solid #252525;border-radius:10px;padding:10px;margin-bottom:10px;font-size:13px;color:#bbb;line-height:1.5;}.order-info b{color:#fff;}.order-actions{display:flex;flex-wrap:wrap;gap:8px;}.order-btn{display:inline-block;background:#c00000;color:#fff;text-decoration:none;border-radius:9px;padding:9px 11px;font-size:12px;font-weight:bold;}.order-btn.dark{background:#222;border:1px solid #333;}.badge{padding:6px 9px;border-radius:999px;font-size:11px;font-weight:bold;background:#5c4500;color:#ffd35c;white-space:nowrap;}.badge.paid{background:#064d28;color:#62ff9c;}.badge.failed{background:#5c0000;color:#ff9a9a;}.notification-item{background:#1b1b1b;border:1px solid #2a2a2a;border-radius:12px;padding:12px;margin-bottom:10px;}.notification-title{font-size:14px;font-weight:bold;color:#fff;margin-bottom:6px;}.notification-message{font-size:13px;color:#ccc;line-height:1.6;}.notification-date{font-size:11px;color:#888;margin-top:7px;}.posts-grid{gap:18px;}.footer{margin-top:28px;padding:20px;text-align:center;background:#111;border-top:1px solid #222;color:#777;font-size:13px;}.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;justify-content:center;align-items:center;z-index:99999;}.modal-bg.active{display:flex;}.modal{background:#111;padding:25px;border-radius:15px;width:90%;max-width:400px;border:1px solid #c00000;position:relative;}.close{position:absolute;top:10px;right:15px;font-size:26px;cursor:pointer;}.modal h3{color:#ff2b2b;margin-bottom:18px;}.form-row input{width:100%;padding:13px;margin-bottom:12px;border:none;border-radius:8px;background:#1d1d1d;color:#fff;border:1px solid #333;}.small-btn{width:100%;padding:13px;border:none;border-radius:8px;background:#c00000;color:#fff;font-weight:bold;cursor:pointer;}@media(max-width:700px){.logo{font-size:16px;}.user-role{display:none;}.hero-panel{flex-direction:column;text-align:center;}.dropdown-menu{width:92%;right:4%;}.post-img,.post-video{height:180px;}}`;

  const postsHtml = (myPosts.results || []).map(p => {
    const images = (p.image || "").split(",").map(s => s.trim()).filter(Boolean);
    const slides = images.map(img => `<div class="slide"><a href="/posts/view_repair/?id=${p.id}"><img class="post-img" src="${esc(mediaCloudUrl(img, "repairs"))}"></a></div>`).join("");
    return `<div class="post-card">
${slides ? `<div class="media-slider">${slides}</div>` : ""}
<a class="post-title" href="/posts/view_repair/?id=${p.id}">${esc(p.title || "")}</a>
<div class="post-desc">${nl2brEsc(p.content || "")}</div>
<div class="post-meta"><span>${formatDateShort(p.created_at)}</span><span>💬 ${Number(p.total_comments || 0)}</span></div>
</div>`;
  }).join("");

  const commentsHtml = (latestComments.results || []).map(c => `
<div class="comment-item">
<div class="comment-top">
<img src="${esc(mediaCloudUrl(c.foto_profil || "default-profile.png", "css"))}">
<div>
<div class="comment-name">${esc(c.nama_komentar || c.user_name || 'Member')}</div>
<div class="comment-date">${formatDate(c.created_at)}</div>
</div>
</div>
<div class="comment-text">${nl2brEsc(c.comment || "")}</div>
<a class="comment-post" href="/posts/repair/#post${c.post_id}">Lihat posting: ${esc(c.post_title || "")}</a>
</div>`).join("");

  const orderHtml = (myRemapOrders.results || []).map(o => {
    const payStatus = String(o.payment_status || o.status || "pending").toLowerCase();
    const badgeClass = payStatus === "paid" || payStatus === "success" || payStatus === "completed" ? "paid" : (payStatus === "failed" ? "failed" : "pending");
    return `<div class="order-card">
<div class="order-top"><div><div class="order-title">${esc(o.kendaraan || "-")} — ${esc(o.ecu_type || "-")}</div><div class="order-date">Order #${esc(o.id || "-")} • ${formatDate(o.created_at)}</div></div><div class="badge ${badgeClass}">${esc(payStatus.toUpperCase())}</div></div>
<div class="order-info"><div>Status Order <b>${esc(o.status || "-")}</b></div><div>Total <b>Rp ${Number(o.price || o.amount || 0).toLocaleString("id-ID")}</b></div><div>Reference <b>${esc(o.duitku_reference || o.reference || "-")}</b></div></div>
<div class="order-info"><div>Permintaan <b>${nl2brEsc(o.permintaan || "-")}</b></div></div>
<div class="order-actions">${o.ecu_file ? `<a href="${esc(o.ecu_file)}" class="order-btn dark" download>⬇ File Original</a>` : ""}${o.result_file ? `<a href="${esc(o.result_file)}" class="order-btn" download>✅ Download Hasil Remap</a>` : ""}<a href="/remap/" class="order-btn dark">➕ Order Baru</a></div>
</div>`;
  }).join("");

  const completedFileHtml = (myCompletedRemapFiles.results || []).map(f => `<div class="order-card">
<div class="order-top"><div><div class="order-title">${esc(f.kendaraan || "-")} — ${esc(f.ecu_type || "-")}</div><div class="order-date">Selesai • Order #${esc(f.id || "-")} • ${formatDate(f.created_at)}</div></div><div class="badge paid">SELESAI</div></div>
<div class="order-info"><div>File Original <b>${esc(f.ecu_file_original || f.ecu_file || "-")}</b></div><div>Hasil Remap <b>${esc(f.result_file_original || f.result_file || "-")}</b></div></div>
<div class="order-actions"><a href="${esc(f.result_file)}" class="order-btn" download>✅ Download File Remap</a></div>
</div>`).join("");

  const body = `
<div class="header">
<div class="logo">IDS ECU REPAIR</div>
<div class="user-menu" onclick="toggleMenu()">
<img src="${esc(mediaCloudUrl(user?.foto_profil || "default-profile.png", "css"))}" class="profile-img">
<div><div class="user-name">${esc(user?.nama || "Member")}</div><div class="user-role">Teknisi ECU</div></div>
</div>
</div>

<div class="dropdown-menu" id="menuModal">
<div class="dropdown-profile">
<img src="${esc(mediaCloudUrl(user?.foto_profil || "default-profile.png", "css"))}" class="dropdown-img">
<h3>${esc(user?.nama || "Member")}</h3>
<p>${esc(user?.email || "")}</p>
</div>
<div class="dropdown-links">
<a href="/">🏠 Home</a>
<a href="/dashboard/my_posts/">🛠 Postingan Saya</a>
<a href="/posts/create_repair/">➕ Buat Posting ECU</a>
<a href="/posts/repair/">📄 Semua Posting ECU</a>
<a href="/posts/ecu_files/">📦 File ECU</a>
<a href="/dashboard/profile/">⚙️ Edit Profil</a>
<a href="#" onclick="openChangePass();return false;">🔒 Ganti Password</a>
<a href="../auth/logout.php" class="logout-btn">🚪 Logout</a>
</div>
</div>

<div class="container">
<div class="hero-panel">
<img src="${esc(mediaCloudUrl(user?.foto_profil || "default-profile.png", "css"))}">
<div>
<h1>Panel Teknisi</h1>
<p>Kelola postingan repair ECU, file ECU, komentar member, dan profil teknisi dari halaman dashboard ini.</p>
</div>
</div>

<div class="quick-actions">
<a href="/posts/create_repair/" class="action-btn">➕ Buat Posting</a>
<a href="/dashboard/my_posts/" class="action-btn dark">🛠 Postingan Saya</a>
<a href="/posts/repair/" class="action-btn dark">📄 Semua Posting</a>
<a href="/posts/ecu_files/" class="action-btn dark">📦 File ECU</a>
<a href="/dashboard/profile/" class="action-btn dark">⚙️ Edit Profil</a>
<a href="/remap/" class="action-btn dark">🛒 Order Remap</a>
<a href="#" onclick="openChangePass();return false;" class="action-btn dark">🔒 Ganti Password</a>
</div>

<div class="stats-grid">
<div class="stat-card"><h2>${Number(totalPosting?.total || 0)}</h2><p>Total Postingan Saya</p></div>
<div class="stat-card"><h2>${Number(totalFile?.total || 0)}</h2><p>File ECU Saya</p></div>
<div class="stat-card"><h2>${Number(totalKomentar?.total || 0)}</h2><p>Komentar Masuk</p></div>
<div class="stat-card"><h2>${Number(totalRemapOrders?.total || 0)}</h2><p>Order ECU Saya</p></div>
</div>

<div class="section">
<h2>🛒 Order ECU Saya</h2>
${orderHtml ? `<div class="order-list">${orderHtml}</div>` : `<div class="empty">Belum ada order remap ECU.</div>`}
</div>

<div class="section">
<h2>✅ File Remap Saya</h2>
${completedFileHtml ? `<div class="order-list">${completedFileHtml}</div>` : `<div class="empty">Belum ada file remap yang selesai.</div>`}
</div>

<div class="section">
<h2>🔔 Notifikasi Order Remap</h2>
${(remapNotifications.results || []).map(n => `<div class="notification-item"><div class="notification-title">${esc(n.title || "Notifikasi")}</div><div class="notification-message">${nl2brEsc(n.message || "")}</div><div class="notification-date">${formatDate(n.created_at)}</div></div>`).join("") || `<div class="empty">Belum ada notifikasi order.</div>`}
</div>

<div class="section">
<h2>🛠 Postingan Saya Terbaru</h2>
${postsHtml || `<div class="empty">Kamu belum membuat posting ECU.</div>`}
</div>

<div class="section">
<h2>💬 Komentar Terbaru di Postingan Saya</h2>
${commentsHtml || `<div class="empty">Belum ada komentar baru di postingan kamu.</div>`}
</div>
</div>

<div class="modal-bg" id="changePassModal">
<div class="modal">
<span class="close" onclick="closeChangePass()">×</span>
<h3>Ganti Password</h3>
<div class="form-row">
<input type="password" id="currentPassword" placeholder="Password Lama">
<input type="password" id="newPassword" placeholder="Password Baru">
<input type="password" id="confirmPassword" placeholder="Konfirmasi Password">
</div>
<button class="small-btn" onclick="submitChangePassword()">Simpan Password</button>
<div id="changePassMsg" style="margin-top:10px;"></div>
</div>
</div>

<div class="footer">© 2025 IDS ECU REPAIR SOPPENG</div>`;

  const scripts = `
function toggleMenu(){document.getElementById('menuModal').classList.toggle('active');}
window.addEventListener('click',function(e){
const menu = document.getElementById('menuModal');
const button = document.querySelector('.user-menu');
if(menu && button && !menu.contains(e.target) && !button.contains(e.target)){menu.classList.remove('active');}
});
function openChangePass(){document.getElementById('changePassModal').classList.add('active');document.getElementById('menuModal').classList.remove('active');}
function closeChangePass(){document.getElementById('changePassModal').classList.remove('active');}
function submitChangePassword(){
const currentPassword = document.getElementById('currentPassword').value.trim();
const newPassword = document.getElementById('newPassword').value.trim();
const confirmPassword = document.getElementById('confirmPassword').value.trim();
const msgDiv = document.getElementById('changePassMsg');
msgDiv.style.color='red';
if(!currentPassword || !newPassword || !confirmPassword){msgDiv.innerText='Semua kolom wajib diisi';return;}
if(newPassword !== confirmPassword){msgDiv.innerText='Konfirmasi password tidak cocok';return;}
fetch('/dashboard/change_password.php',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({currentPassword:currentPassword,newPassword:newPassword,confirmPassword:confirmPassword})
}).then(function(r){return r.json().then(function(j){return {ok:r.ok,data:j};});})
.then(function(res){
if(res.ok && res.data.success){
msgDiv.style.color='lime';
msgDiv.innerText=res.data.message || 'Password berhasil diubah';
document.getElementById('currentPassword').value='';
document.getElementById('newPassword').value='';
document.getElementById('confirmPassword').value='';
}else{
msgDiv.style.color='red';
msgDiv.innerText=(res.data && res.data.message) ? res.data.message : 'Password gagal diubah';
}
}).catch(function(){
msgDiv.style.color='red';
msgDiv.innerText='Gagal terhubung ke server';
});
}`;

  return htmlResponse(pageWrap({ title: "Dashboard Teknisi | IDS ECU REPAIR", styles, body, scripts }));
}

async function handleMyPosts(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return redirectToLogin(request);
  const posts = await env.DB.prepare(`SELECT * FROM repair_posts WHERE user_id=? ORDER BY id DESC`).bind(user.id).all();

  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:#0d0d0d;font-family:Arial,sans-serif;color:#fff;}.navbar{position:sticky;top:0;z-index:999;background:#111;border-bottom:1px solid #222;padding:12px 15px;display:flex;align-items:center;justify-content:space-between;}.logo{font-size:17px;font-weight:bold;color:#ff2b2b;}.nav-right{display:flex;gap:8px;align-items:center;}.nav-btn{background:#1c1c1c;border:1px solid #333;color:#fff;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:12px;}.nav-btn:hover{background:#ff2b2b;}.container{width:100%;max-width:750px;margin:auto;padding:15px;}.page-title{font-size:17px;color:#ff3c3c;margin-bottom:14px;}.post{background:#161616;border:1px solid #242424;border-radius:14px;overflow:hidden;margin-bottom:18px;}.post img{width:100%;max-height:240px;object-fit:cover;display:block;}.content{padding:14px;}.title{font-size:17px;font-weight:bold;color:#ff3c3c;margin-bottom:8px;line-height:1.4;}.desc{font-size:13px;color:#d2d2d2;line-height:1.7;}.info{margin-top:12px;font-size:12px;color:#888;}.action{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;}.action a{display:inline-block;padding:8px 12px;border-radius:8px;text-decoration:none;color:white;font-size:12px;}.view{background:#333;}.delete{background:#a00000;}.view:hover,.delete:hover{background:#ff2b2b;}.empty{padding:50px 20px;text-align:center;color:#777;font-size:14px;}.ecu-file-box{margin-top:12px;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;}.ecu-file-left{display:flex;align-items:center;gap:10px;overflow:hidden;}.ecu-file-icon{width:42px;height:42px;border-radius:10px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}.ecu-file-info{overflow:hidden;}.ecu-file-name{font-size:13px;font-weight:bold;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:180px;}.ecu-file-size{font-size:11px;color:#888;margin-top:3px;}.ecu-download-btn{width:40px;height:40px;border-radius:10px;background:#c00000;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff;font-size:17px;flex-shrink:0;}.ecu-download-btn:hover{background:#ff2b2b;}.post-video{width:100%;max-height:220px;object-fit:cover;border-radius:8px;margin-bottom:10px;background:#000;border:1px solid #333;}.media-slider{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;background:#000;}.slide{min-width:100%;scroll-snap-align:start;background:#000;display:flex;align-items:center;justify-content:center;}.media-slider .post-img,.media-slider .post-video,.media-slider iframe{width:100%;height:240px;object-fit:contain;display:block;background:#000;border:none;border-radius:0;margin:0;}@media(max-width:600px){.logo{font-size:15px;}.nav-btn{font-size:11px;padding:7px 10px;}.container{padding:10px;}.title{font-size:16px;}.post img{max-height:210px;}.media-slider .post-img,.media-slider .post-video,.media-slider iframe{height:210px;}}`;

  const body = `
<div class="navbar">
<div class="logo">Postingan Saya</div>
<div class="nav-right">
<a href="/dashboard/" class="nav-btn"> Kembali</a>
<a href="/posts/create_repair/" class="nav-btn">+ Posting</a>
</div>
</div>

<div class="container">
<div class="page-title">🛠 Postingan ECU Milik Saya</div>
${(posts.results || []).map(p => {
  const images = (p.image || "").split(",").map(s => s.trim()).filter(Boolean);
  const yt = getYoutubeId(p.youtube_url || "");
  const slides = [
    ...images.map(img => `<div class="slide"><a href="/posts/view_repair/?id=${p.id}"><img class="post-img" src="${esc(mediaCloudUrl(img, "repairs"))}"></a></div>`),
    ...(p.video ? [`<div class="slide"><video class="post-video" controls playsinline preload="metadata"><source src="${esc(mediaCloudUrl(p.video, "videos"))}" type="video/mp4"></video></div>`] : []),
    ...(yt ? [`<div class="slide"><iframe class="post-video" src="https://www.youtube.com/embed/${esc(yt)}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`] : [])
  ].join("");

  return `<div class="post">
${slides ? `<div class="media-slider">${slides}</div>` : ""}
<div class="content">
<div class="title">${esc(p.title || "")}</div>
<div class="desc">${nl2brEsc(String(p.content || "").slice(0,180))}...</div>
${p.ecu_file ? `<div class="ecu-file-box"><div class="ecu-file-left"><div class="ecu-file-icon">📦</div><div class="ecu-file-info"><div class="ecu-file-name">${esc(p.ecu_file_original || p.ecu_file)}</div><div class="ecu-file-size">${p.ecu_file_size ? formatBytes(p.ecu_file_size) : "Cloudflare R2"}</div></div></div><a href="/posts/download_ecu.php?id=${p.id}" class="ecu-download-btn">⬇</a></div>` : ""}
<div class="info">${formatDate(p.created_at)}</div>
<div class="action">
<a class="view" href="/posts/view_repair/?id=${p.id}">Lihat</a>
<a class="delete" href="#" onclick="return confirm('Yakin hapus postingan ini?')">Hapus</a>
</div>
</div>
</div>`;
}).join("") || `<div class="empty">Kamu belum punya postingan.</div>`}
</div>`;

  return htmlResponse(pageWrap({ title: "Postingan Saya", styles, body }));
}

async function handleProfile(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return redirectToLogin(request);

  let message = "";
  let error = "";
  let shownUser = user;

  if (request.method === "POST") {
    try {
      const form = await request.formData();
      const nama = String(form.get("nama") || "").trim();
      const foto = form.get("foto");

      if (!nama) throw new Error("Nama profil wajib diisi.");
      if (!/^[a-zA-Z0-9 ._\-]{3,60}$/.test(nama)) {
        throw new Error("Nama hanya boleh huruf, angka, spasi, titik, strip, dan underscore. Minimal 3 karakter.");
      }

      let fotoUrl = String(user.foto_profil || "");
      if (foto && typeof foto === "object" && foto.size > 0) {
        fotoUrl = await uploadProfilePhoto(env, user.id, foto, fotoUrl);
      }

      await env.DB.prepare("UPDATE tamu SET nama=?, foto_profil=? WHERE id=?").bind(nama, fotoUrl, user.id).run();
      shownUser = await env.DB.prepare("SELECT id,nama,email,role,poin,foto_profil,is_verified FROM tamu WHERE id=? LIMIT 1").bind(user.id).first();
      message = "Profil berhasil diperbarui.";
    } catch (e) {
      error = e.message || "Profil gagal diperbarui.";
    }
  }

  const styles = `body{margin:0;background:#0b0b0b;font-family:Arial;color:#fff;}.header{background:#111;padding:15px;font-size:22px;font-weight:bold;border-bottom:2px solid red;}.container{width:95%;max-width:450px;margin:30px auto;}.card{background:#141414;padding:25px;border-radius:15px;border:1px solid #222;}.profile-box{text-align:center;margin-bottom:25px;position:relative;}.profile-box img{width:130px;height:130px;border-radius:50%;object-fit:cover;border:3px solid red;}.edit-icon{position:absolute;bottom:5px;right:35%;background:red;width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;}.form-group{margin-bottom:18px;}.form-group label{display:block;margin-bottom:8px;color:#aaa;}.form-group input{width:100%;padding:14px;background:#1d1d1d;border:1px solid #333;border-radius:8px;color:#fff;box-sizing:border-box;}.save-btn{width:100%;padding:14px;background:red;border:none;border-radius:8px;color:white;font-weight:bold;cursor:pointer;}.save-btn:hover{background:#ff2b2b;}.back{display:inline-block;margin-bottom:20px;background:#222;color:white;padding:10px 15px;border-radius:8px;text-decoration:none;}.alert{padding:12px;border-radius:8px;margin-bottom:15px;text-align:center;font-weight:bold;}.ok{background:#063;color:#fff;}.err{background:#8b0000;color:#fff;}.hint{font-size:12px;color:#888;margin-top:6px;line-height:1.4;}`;
  const body = `
<div class="header">👤 Edit Profil</div>
<div class="container">
<a href="/dashboard/" class="back"> Kembali</a>
${message ? `<div class="alert ok">${esc(message)}</div>` : ""}
${error ? `<div class="alert err">${esc(error)}</div>` : ""}
<div class="card">
<form method="POST" enctype="multipart/form-data">
<div class="profile-box">
<img src="${esc(mediaCloudUrl(shownUser?.foto_profil || "default-profile.png", "css"))}">
<div class="edit-icon">✎</div>
</div>
<div class="form-group">
<label>Foto Profil</label>
<input type="file" name="foto" accept="image/*">
<div class="hint">Foto tersimpan di bucket R2 folder profile/. Format JPG, PNG, WEBP, GIF. Maksimal 5MB.</div>
</div>
<div class="form-group">
<label>Nama Profil</label>
<input type="text" name="nama" value="${esc(shownUser?.nama || '')}" required>
</div>
<button type="submit" class="save-btn">Simpan Perubahan</button>
</form>
</div>
</div>`;
  return htmlResponse(pageWrap({ title: "Edit Profil", styles, body }));
}

async function handleChangePassword(request, env) {
  const user = await requireLogin(request, env);
  if (!user) return jsonResponse({ success: false, message: "Unauthorized" }, 401);

  if (request.method !== "POST") {
    return jsonResponse({ success: false, message: "Method not allowed" }, 405);
  }

  let data = {};
  try {
    data = await request.json();
  } catch (e) {
    data = {};
  }

  const currentPassword = String(data.currentPassword || "");
  const newPassword = String(data.newPassword || "");
  const confirmPassword = String(data.confirmPassword || "");

  if (!currentPassword || !newPassword || !confirmPassword) {
    return jsonResponse({ success: false, message: "Semua kolom wajib diisi." }, 400);
  }

  if (newPassword !== confirmPassword) {
    return jsonResponse({ success: false, message: "Konfirmasi password tidak cocok." }, 400);
  }

  const fullUser = await env.DB.prepare("SELECT id,password FROM tamu WHERE id=? LIMIT 1").bind(user.id).first();
  const ok = await verifyPassword(currentPassword, fullUser?.password || "");

  if (!ok) {
    return jsonResponse({ success: false, message: "Password lama salah. Jika akun lama masih memakai bcrypt PHP, gunakan menu Lupa Password dulu untuk membuat password baru." }, 401);
  }

  if (newPassword.length < 6 || !/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
    return jsonResponse({ success: false, message: "Password baru minimal 6 karakter, wajib ada huruf besar dan angka." }, 400);
  }

  const newHash = await hashPassword(newPassword);
  await env.DB.prepare("UPDATE tamu SET password=? WHERE id=?").bind(newHash, user.id).run();

  return jsonResponse({ success: true, message: "Password berhasil diubah." });
}

async function handleSport() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Orbitron',sans-serif;background:#0b0b0b;color:#fff;overflow-x:hidden;}.header{position:sticky;top:0;z-index:999;background:#111;border-bottom:2px solid #c00000;padding:17px 21px;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.header .logo{font-size:16px;font-weight:bold;color:#ff2b2b;letter-spacing:1px;}.nav a{background:#1b1b1b;border:1px solid #333;color:#fff;text-decoration:none;padding:9px 12px;border-radius:8px;font-size:12px;margin-left:6px;}.nav a:hover{background:#c00000;}.hero{padding:45px 18px 25px;text-align:center;background:linear-gradient(rgba(0,0,0,.82),rgba(0,0,0,.9)),url('/css/bg-ecu.jpg');background-size:cover;background-position:center;}.hero h1{font-size:28px;color:#ff2b2b;margin-bottom:12px;}.hero p{max-width:760px;margin:auto;font-size:14px;line-height:1.7;color:#ccc;}.container{max-width:950px;margin:auto;padding:18px;}.card{background:#141414;border:1px solid #242424;border-radius:14px;padding:16px;margin-bottom:16px;}.card h2{font-size:18px;color:#ff2b2b;margin-bottom:10px;}.card p{font-size:14px;line-height:1.7;color:#ccc;}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:14px;}.sport-box{background:#1d1d1d;border:1px solid #2a2a2a;border-radius:12px;padding:14px;}.sport-box h3{font-size:15px;color:#fff;margin-bottom:8px;}.sport-box p{font-size:13px;color:#aaa;line-height:1.6;}.badge{display:inline-block;background:#c00000;color:#fff;padding:5px 9px;border-radius:20px;font-size:11px;margin-bottom:8px;}footer{margin-top:30px;padding:22px;text-align:center;background:#111;border-top:1px solid #222;color:#777;font-size:13px;}@media(max-width:600px){.logo{font-size:16px;}.hero h1{font-size:23px;}.nav a{font-size:11px;padding:8px 10px;}}`;
  const body = `
<div class="header">
<div class="logo">🏆 Sport Info</div>
<div class="nav">
<a href="/">Home</a>
<a href="/posts/repair/">Posting ECU</a>
<a href="/dashboard/">Dashboard</a>
</div>
</div>

<section class="hero">
<h1>Info Sport & Olahraga</h1>
<p>Halaman ini berisi informasi ringan seputar olahraga, tips latihan, jadwal aktivitas sport, dan inspirasi hidup sehat untuk komunitas IDS.</p>
</section>

<div class="container">
<div class="card"><h2>🔥 Update Sport Hari Ini</h2><p>AWALUDDIN "SUPERNEW" ASAL SOPPENG SIAP GEBRAK RING NEX RTC VOL. 2</p></div>
<div class="card">
<h2>📌 Kategori Olahraga</h2>
<div class="grid">
<div class="sport-box">
<span class="badge">Otomotif</span>
<h3>Automotive Sport</h3>
<p>Info seputar dunia otomotif sport, drag race, touring, modifikasi performa, komunitas kendaraan, dan update teknologi mesin kendaraan.</p>
</div>
<div class="sport-box">
<span class="badge"><a href="/sport/fighter-awaludin/" style="text-decoration:none;color:white;">Fighter</a></span>
<h3>Combat & Fighter Sport</h3>
<p>Informasi seputar dunia fighter, boxing, MMA, kick boxing, latihan fisik, stamina, dan perkembangan olahraga combat sport.</p>
</div>
</div>
</div>
<div class="card"><h2>💪 Tips Olahraga Aman</h2><p>Sebelum olahraga, lakukan pemanasan 5–10 menit. Gunakan perlengkapan yang sesuai, minum air cukup, dan jangan memaksakan tubuh jika merasa pusing atau nyeri.</p></div>
</div>

<footer>© 2025 IDS ECU REPAIR SOPPENG | Sport & Community</footer>`;
  return htmlResponse(pageWrap({ title: "Info Sport & Olahraga | IDS ECU REPAIR", styles, body }));
}

async function handleFighter() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:#0b0b0b;color:#fff;font-family:'Orbitron',sans-serif;overflow-x:hidden;}.header{position:sticky;top:0;z-index:999;background:#111;border-bottom:2px solid #c00000;padding:17px 21px;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.logo{font-size:16px;font-weight:bold;color:#ff2b2b;letter-spacing:1px;}.nav a{background:#1b1b1b;border:1px solid #333;color:#fff;text-decoration:none;padding:9px 12px;border-radius:8px;font-size:12px;margin-left:6px;}.nav a:hover{background:#c00000;}.hero{min-height:360px;padding:70px 20px 50px;display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.92)),url('/bucket/fighter/awaluddin-soppeng.png');background-size:cover;background-position:center;}.hero-content{max-width:850px;}.hero-badge{display:inline-block;background:#c00000;padding:7px 13px;border-radius:30px;font-size:12px;margin-bottom:14px;}.hero h1{font-size:34px;color:#ff2b2b;margin-bottom:12px;text-shadow:0 0 15px rgba(255,0,0,.5);}.hero p{font-size:14px;line-height:1.8;color:#ddd;}.container{max-width:1000px;margin:auto;padding:18px;}.profile-card{background:#141414;border:1px solid #242424;border-radius:16px;padding:18px;margin-top:-35px;margin-bottom:18px;display:flex;gap:16px;align-items:center;}.profile-card img{width:120px;height:120px;border-radius:14px;object-fit:cover;border:2px solid #c00000;}.profile-text h2{font-size:22px;color:#ff2b2b;margin-bottom:8px;}.profile-text p{font-size:14px;line-height:1.7;color:#ccc;}.card{background:#141414;border:1px solid #242424;border-radius:16px;padding:18px;margin-bottom:18px;}.card h2{font-size:20px;color:#ff2b2b;margin-bottom:12px;}.card p{font-size:14px;line-height:1.8;color:#ccc;}.info-list{line-height:2;font-size:14px;color:#ccc;}.info-list b{color:#fff;}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin-top:12px;}.box{background:#1d1d1d;border:1px solid #2a2a2a;border-radius:12px;padding:14px;}.box span{display:inline-block;background:#c00000;padding:5px 10px;border-radius:20px;font-size:11px;margin-bottom:8px;}.box h3{font-size:15px;margin-bottom:7px;}.box p{font-size:13px;color:#aaa;line-height:1.6;}.btn{display:inline-block;margin-top:14px;background:#c00000;color:#fff;padding:11px 15px;border-radius:9px;text-decoration:none;font-size:13px;}.btn:hover{background:#ff2b2b;}footer{margin-top:30px;padding:22px;text-align:center;background:#111;border-top:1px solid #222;color:#777;font-size:13px;}@media(max-width:600px){.hero h1{font-size:26px;}.profile-card{flex-direction:column;text-align:center;}.profile-card img{width:135px;height:135px;}.logo{font-size:15px;}.nav a{font-size:11px;padding:7px 9px;}}`;
  const body = `
<div class="header">
<div class="logo">🥊 Fighter Soppeng</div>
<div class="nav">
<a href="/">Home</a>
<a href="/sport/">Sport</a>
</div>
</div>

<section class="hero">
<div class="hero-content">
<div class="hero-badge">NEX Road to Champion Vol. 2</div>
<h1>Awaludin "Supernew"</h1>
<p>Fighter asal Soppeng, Sulawesi Selatan yang tampil dalam dunia combat sport, boxing, MMA, dan kick boxing.</p>
</div>
</section>

<div class="container">
<div class="profile-card">
<img src="/bucket/fighter/awaluddin-soppeng.png" alt="Awaludin Supernew">
<div class="profile-text">
<h2>Awaludin "Supernew"</h2>
<p>Awaludin dikenal sebagai fighter asal Kabupaten Soppeng, Sulawesi Selatan. Ia membawa nama Super Camp Soppeng dalam ajang combat sport dan boxing.</p>
</div>
</div>

<div class="card">
<h2>📌 Profil Singkat</h2>
<div class="info-list">
<b>Nama:</b> Awaludin<br>
<b>Julukan:</b> Supernew<br>
<b>Asal:</b> Kabupaten Soppeng, Sulawesi Selatan<br>
<b>Sasana:</b> Super Camp Soppeng<br>
<b>Bidang:</b> Boxing, MMA, Kick Boxing<br>
<b>Kategori:</b> Combat Sport / Fighter<br>
</div>
</div>

<div class="card">
<h2>🥊 Jadwal Pertandingan</h2>
<p>Awaludin <b>"Supernew"</b> dijadwalkan tampil dalam ajang <b>NEX Road to Champion (RTC) Volume 2</b>. Pertandingan ini menggunakan aturan boxing atau tinju di kelas <b>63,5 kg</b>.</p>
<br>
<div class="grid">
<div class="box"><h2>Event</h2><h3>NEX RTC Vol. 2</h3><p>NEX Road to Champion Volume 2.</p></div>
<div class="box"><h2>Kelas</h2><h3>63,5 KG</h3><p>Kategori pertandingan boxing / tinju.</p></div>
<div class="box"><h2>Sasana</h2><h3>Super Camp</h3><p>Mewakili Kabupaten Soppeng, Sulawesi Selatan.</p></div>
<div class="box"><h2>Siaran</h2><h3>Vidio PPV</h3><p>Pertandingan dapat disaksikan melalui Pay-Per-View di Vidio.</p></div>
</div>
</div>

<div class="card">
<h2>📢 Informasi Event</h2>
<p>Pihak promotor merilis video profil kesiapan tanding Awaludin pada pertengahan Mei 2026. Informasi detail fight card, jadwal per hari, dan urutan pertandingan biasanya dirilis secara bertahap melalui akun resmi event seperti <b>@kartelkombat</b> dan <b>@combatsportindonesia</b>.</p>
<a href="https://www.vidio.com/" target="_blank" class="btn">Tonton via Vidio</a>
</div>

<div class="card">
<h2>💪 Mental Fighter</h2>
<p>Dunia fighter bukan hanya soal pukulan. Seorang fighter membutuhkan disiplin, mental kuat, stamina, teknik, dan konsistensi latihan. Awaludin menjadi salah satu representasi semangat anak daerah dalam dunia combat sport.</p>
</div>
</div>

<footer>© 2025 IDS ECU REPAIR SOPPENG | Fighter Community</footer>`;
  return htmlResponse(pageWrap({ title: "Awaludin Supernew MMA Soppeng", styles, body }));
}

async function handleAiEcu() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}html,body{width:100%;height:100%;overflow:hidden;}body{font-family:Arial,sans-serif;background:#050505;color:#fff;}.ai-page{width:100%;height:100dvh;padding:10px;display:flex;justify-content:center;align-items:stretch;}.ai-box{width:100%;max-width:850px;height:100%;background:#111;border:1px solid #2a2a2a;border-radius:18px;box-shadow:0 0 25px rgba(255,0,0,.18);display:flex;flex-direction:column;overflow:hidden;}.ai-top{height:58px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #252525;flex-shrink:0;}.home-btn{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:12px;background:#1d1d1d;border:1px solid #333;color:#fff;text-decoration:none;font-size:20px;}.ai-title{color:#ff2b2b;font-size:20px;font-weight:bold;}.ai-body{padding:14px;display:flex;flex-direction:column;height:calc(100% - 58px);overflow:hidden;}.ai-desc{color:#ccc;line-height:1.5;font-size:13px;margin-bottom:10px;flex-shrink:0;}.quick{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:10px;flex-shrink:0;}.quick button{padding:10px 8px;font-size:12px;background:#222;border:1px solid #333;border-radius:12px;color:#fff;font-weight:bold;}#chat{flex:1;min-height:0;overflow-y:auto;background:#080808;border:1px solid #222;border-radius:14px;padding:12px;margin-bottom:10px;-webkit-overflow-scrolling:touch;}.msg{padding:12px;border-radius:13px;margin-bottom:10px;line-height:1.55;white-space:pre-wrap;font-size:14px;}.user{background:#8b0000;margin-left:38px;border-bottom-right-radius:4px;}.bot{background:#1b1b1b;border-left:3px solid #ff2b2b;margin-right:38px;border-bottom-left-radius:4px;}.input-row{display:grid;grid-template-columns:1fr 80px;gap:8px;flex-shrink:0;}textarea{width:100%;height:56px;background:#0b0b0b;border:1px solid #333;color:#fff;border-radius:12px;padding:11px;resize:none;font-size:13px;outline:none;}.input-row button{background:#d00000;color:#fff;border:none;border-radius:12px;font-weight:bold;font-size:14px;}.note{font-size:11px;color:#999;line-height:1.4;margin-top:8px;flex-shrink:0;}@media(max-width:480px){.ai-page{padding:8px;}.ai-box{border-radius:16px;}.ai-top{height:54px;padding:0 12px;}.home-btn{width:38px;height:38px;font-size:18px;}.ai-title{font-size:18px;}.ai-body{padding:12px;height:calc(100% - 54px);}.quick{gap:7px;}.quick button{font-size:11px;padding:9px 6px;}.msg{font-size:13px;padding:11px;}.user{margin-left:26px;}.bot{margin-right:26px;}.input-row{grid-template-columns:1fr 74px;}.textarea{height:54px;font-size:13px;}.input-row button{font-size:13px;}}`;
  const body = `
<div class="ai-page">
<div class="ai-box">
<div class="ai-top">
<a href="/" class="home-btn">⌂</a>
<div class="ai-title">🤖 AI Diagnosa ECU</div>
<a href="/posts/repair/" class="home-btn">🛠</a>
</div>

<div class="ai-body">
<p class="ai-desc">Tanya keluhan ECU, DTC, no start, no communication, IMMO, injector, CKP/CMP, atau prosedur read/write ECU.</p>

<div class="quick">
<button onclick="setQ('no communication')">No Communication</button>
<button onclick="setQ('injector mati')">Injector Mati</button>
<button onclick="setQ('cara kerja ecu')">Cara Kerja ECU</button>
<button onclick="setQ('risiko write ecu')">Risiko Write ECU</button>
</div>

<div id="chat">
<div class="msg bot">Halo, saya AI ECU IDS Repair. Jelaskan keluhan kendaraan, tipe mobil, kode DTC, dan gejala lengkap.</div>
</div>

<div class="input-row">
<textarea id="question" placeholder="Contoh: Toyota Hilux no start, DTC P0335, rpm scanner 0..."></textarea>
<button onclick="askAI()">Kirim</button>
</div>

<p class="note">Catatan: AI ini hanya diagnosa awal. Untuk keputusan repair/remap tetap perlu pengecekan teknisi.</p>
</div>
</div>
</div>`;

  const scripts = `
function setQ(text){document.getElementById('question').value = text;}
function addMsg(text, cls){
const chat = document.getElementById('chat');
const div = document.createElement('div');
div.className = 'msg ' + cls;
div.textContent = text;
chat.appendChild(div);
chat.scrollTop = chat.scrollHeight;
}
async function askAI(){
const input = document.getElementById('question');
const question = input.value.trim();
if(!question) return;
addMsg(question, 'user');
input.value = '';
addMsg('Sedang menganalisa...', 'bot');
try{
const res = await fetch('/ai-ecu/ai_reply.php', {
method:'POST',
headers:{'Content-Type':'application/json','Accept':'application/json'},
body:JSON.stringify({question:question})
});
const data = await res.json();
document.querySelector('#chat .bot:last-child').textContent = data.answer || 'Maaf, AI belum bisa menjawab saat ini.';
}catch(e){
document.querySelector('#chat .bot:last-child').textContent = 'Gagal terhubung ke server AI: ' + e.message;
}
}`;
  return htmlResponse(pageWrap({ title: "AI Diagnosa ECU - IDS ECU REPAIR", styles, body, scripts }));
}

async function handleAiReply(request) {
  if (request.method !== "POST") return jsonResponse({ answer: "Method tidak diizinkan." }, 405);
  const data = await request.json().catch(() => ({}));
  const q = String(data.question || "").trim().toLowerCase();
  if (!q) return jsonResponse({ answer: "Pertanyaan kosong." });

  let answer = "Saya belum bisa memastikan dari kalimat itu.\n\nCoba tulis dengan format:\n- jenis mobil\n- tipe ECU\n- kode DTC\n- gejala kendaraan\n\nContoh: Toyota Hilux no start, DTC P0335, RPM scanner 0, injector tidak keluar.";

  if (q.includes("no communication") || q.includes("tidak komunikasi")) {
    answer = "No communication ECU biasanya disebabkan oleh fuse ECU/EFI putus, relay utama mati, supply 12V ECU hilang, ground ECU buruk, jalur CAN High/CAN Low bermasalah, soket OBD rusak, sensor 5V short, atau ECU mati total.\n\nLangkah pengecekan:\n- cek aki dan tegangan saat kontak ON\n- cek fuse ECU/EFI dan main relay\n- cek power ECU dan ground ECU\n- ukur CAN High dan CAN Low\n- cek soket OBD pin power/ground/komunikasi\n- lepas sensor 5V satu per satu jika ada short\n- jika power dan CAN normal tapi tetap tidak terbaca, ECU perlu diperiksa.";
  } else if (q.includes("injector mati") || q.includes("injector tidak keluar")) {
    answer = "Injector tidak keluar sinyal bisa disebabkan oleh sensor CKP/CMP tidak terbaca, immobilizer aktif, supply injector hilang, driver injector ECU rusak, fuse EFI putus, main relay mati, atau ECU no communication.\n\nLangkah cek:\n- lihat RPM scanner saat starter\n- cek sensor CKP/CMP\n- cek supply 12V injector\n- cek pulsa negatif injector dari ECU\n- scan DTC injector/CKP/IMMO\n- cek ground ECU\n- cek tahanan injector dan kabel injector.";
  } else if (q.includes("cara kerja ecu") || q.includes("fungsi ecu")) {
    answer = "ECU adalah komputer kendaraan yang membaca sensor lalu mengatur injector, pengapian, throttle, turbo, idle, kipas radiator, dan sistem emisi. Sederhananya ECU adalah otak mesin kendaraan.";
  } else if (q.includes("risiko write ecu") || q.includes("write ecu")) {
    answer = "Risiko write ECU adalah ECU brick/mati, file corrupt, checksum salah, software number tidak cocok, koneksi alat putus, aki drop, mobil no start, atau immobilizer error. Selalu backup file original dan gunakan power supply stabil.";
  } else if (q.includes("p0335") || q.includes("rpm 0")) {
    answer = "DTC P0335 berarti Crankshaft Position Sensor A Circuit. Gejala umum: no start, RPM scanner 0, injector tidak aktif, pengapian tidak keluar.";
  } else if (q.includes("aki drop") || q.includes("battery low") || q.includes("volt aki")) {
    answer = "Aki drop atau aki lemah bisa menyebabkan ECU error, no start, sensor salah baca, relay tidak stabil, scanner putus komunikasi, dan DTC voltage seperti P0560.\n\nUkuran tegangan aki:\n- Mesin mati normal: 12.4V - 12.8V\n- Aki mulai lemah: di bawah 12.2V\n- Sangat lemah: di bawah 12.0V\n- Saat starter: sebaiknya tidak turun di bawah 9.6V\n- Mesin hidup/charging: 13.8V - 14.5V";
  }

  return jsonResponse({ answer });
}

async function handleRemap(request) {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:linear-gradient(rgba(0,0,0,.92),rgba(0,0,0,.94)),url('/bucket/css/bg-ecu.png');font-family:Arial,sans-serif;color:#fff;}.header{position:sticky;top:0;z-index:99;background:#111;padding:10px 14px;border-bottom:2px solid #c00000;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.header-title{font-weight:bold;margin-left:14px;color:#ff2b2b;font-size:17px;letter-spacing:1px;}.back{background:#1d1d1d;border:1px solid #333;padding:7px 11px;border-radius:10px;text-decoration:none;color:#fff;font-size:13px;margin-right:10px;}.container{width:100%;max-width:880px;margin:auto;padding:16px;}.hero{text-align:center;padding:24px 0 15px;}.banner{width:100%;height:220px;object-fit:cover;border-radius:18px;margin-bottom:20px;border:1px solid #222;box-shadow:0 0 20px rgba(255,0,0,.15);opacity:0;transform:scale(1.03);animation:bannerLoad .9s ease forwards;}.hero h1{font-size:26px;color:#ff2b2b;line-height:1.35;margin-bottom:12px;}.hero p{font-size:14px;line-height:1.8;color:#ccc;max-width:760px;margin:auto;}.card{background:#161616;border:1px solid #242424;border-radius:16px;padding:18px;margin-bottom:16px;box-shadow:0 0 18px rgba(255,0,0,.04);}.card h2{font-size:19px;color:#ff3c3c;margin-bottom:12px;}.card p,.card li{font-size:14px;line-height:1.8;color:#ccc;}.card ul{padding-left:20px;}.service-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-top:14px;}.service-box{background:#101010;border:1px solid #2a2a2a;border-radius:12px;padding:13px;font-size:13px;line-height:1.6;color:#ddd;}.price-box{margin-top:15px;background:#101010;border:1px solid #333;border-radius:14px;padding:15px;text-align:center;}.price-box span{display:block;font-size:13px;color:#aaa;margin-bottom:7px;}.price-box b{font-size:24px;color:#00ff7b;}.continue-btn{width:100%;background:#c00000;color:#fff;border:none;border-radius:12px;padding:15px;font-size:15px;font-weight:bold;cursor:pointer;margin-top:14px;box-shadow:0 0 18px rgba(255,0,0,.2);}.continue-btn:hover{background:#ff2b2b;}#orderForm{display:none;}.form-group{margin-bottom:14px;}.form-group label{display:block;font-size:13px;color:#bbb;margin-bottom:7px;}.form-group input,.form-group textarea{width:100%;background:#1b1b1b;border:1px solid #333;border-radius:10px;padding:13px;color:#fff;font-size:14px;outline:none;}.form-group textarea{min-height:115px;resize:vertical;}.form-group input:focus,.form-group textarea:focus{border-color:#c00000;box-shadow:0 0 0 2px rgba(255,0,0,.12);}.note{font-size:12px;color:#888;line-height:1.7;margin-top:8px;}.submit-btn{width:100%;background:#c00000;border:none;border-radius:12px;padding:15px;color:#fff;font-weight:bold;font-size:15px;cursor:pointer;}.submit-btn:hover{background:#ff2b2b;}.footer-note{font-size:12px;color:#777;line-height:1.7;text-align:center;padding:10px 0 25px;}@keyframes bannerLoad{0%{opacity:0;transform:scale(1.05);filter:blur(8px);}100%{opacity:1;transform:scale(1);filter:blur(0);}}@media(max-width:600px){.banner{height:150px;}.hero h1{font-size:21px;}.card{padding:15px;}.price-box b{font-size:21px;}}`;
  const body = `
<div class="header"><div class="header-title">⚡ Remap ECU</div><a href="/" class="back">Home</a></div>
<div class="container">
<section class="hero">
<img src="/bucket/css/og-banner-remap.png" class="banner" alt="Remap ECU IDS Repair">
<h1>Remap ECU & Penambahan Tenaga Mesin</h1>
<p>Layanan tuning file ECU untuk meningkatkan performa mesin, respons pedal, torsi, dan karakter tenaga kendaraan. File original kamu akan diproses oleh teknisi, lalu hasil setting dikirim kembali ke email yang kamu isi.</p>
</section>

<div class="card">
<h2>Apa Itu Remap ECU?</h2>
<p>Remap ECU adalah proses pengaturan ulang data pada file ECU kendaraan. Tujuannya untuk mengoptimalkan tenaga, torsi, respons akselerasi, dan karakter mesin sesuai kebutuhan kendaraan.</p><br>
<p>Layanan ini cocok untuk kendaraan diesel/common rail, mobil harian, unit operasional, kendaraan niaga, dan kebutuhan tuning ringan sampai performa.</p>
<div class="price-box"><span>Biaya layanan per 1 file ECU</span><b>Rp 1.500.000</b></div>
<button type="button" class="continue-btn" onclick="showOrderForm()">LANJUTKAN ORDER REMAP</button>
</div>

<div class="card">
<h2>Layanan Yang Bisa Diminta</h2>
<div class="service-grid">
<div class="service-box">⚡ <b>Stage 1</b><br>Optimasi tenaga dan torsi untuk penggunaan harian.</div>
<div class="service-box">🚗 <b>Throttle Response</b><br>Respons pedal lebih cepat dan tarikan lebih ringan.</div>
<div class="service-box">🛠 <b>EGR / DPF Request</b><br>Penanganan sesuai kebutuhan repair dan troubleshooting.</div>
<div class="service-box">📁 <b>File Checking</b><br>Pemeriksaan file original sebelum proses tuning.</div>
</div>
</div>

<div class="card">
<h2>Alur Order</h2>
<ul>
<li>Isi data kendaraan dan kontak penerima.</li>
<li>Upload file ECU original.</li>
<li>Sistem membuka halaman pilihan pembayaran.</li>
<li>Setelah pembayaran berhasil, status order otomatis masuk proses.</li>
<li>Admin memproses file dan mengirim hasil ke email kamu.</li>
</ul>
</div>

<div id="orderForm">
<div class="card">
<h2>Form Order Remap ECU</h2>
<div class="service-box">💳 <b>Pembayaran Otomatis</b><br>Mendukung QRIS, E-Wallet, transfer bank, dan minimarket dengan verifikasi otomatis.</div>
<form method="POST" enctype="multipart/form-data">
<div class="form-group"><label>Nama Lengkap</label><input type="text" name="nama" required></div>
<div class="form-group"><label>Nomor WhatsApp</label><input type="text" name="whatsapp" placeholder="Contoh: 082346783838" required></div>
<div class="form-group"><label>Email Penerima File Hasil Setting</label><input type="email" name="email" placeholder="contoh@email.com" required></div>
<div class="form-group"><label>Jenis Kendaraan</label><input type="text" name="kendaraan" placeholder="Contoh: Fortuner 2GD / Hilux / Pajero" required></div>
<div class="form-group"><label>Tipe ECU</label><input type="text" name="ecu_type" placeholder="Contoh: Denso / Bosch / Delphi / Continental" required></div>
<div class="form-group"><label>Permintaan Setting</label><textarea name="permintaan" placeholder="Contoh: Stage 1, tenaga bawah tambah, EGR OFF, DPF OFF, torque naik, dll"></textarea></div>
<div class="form-group"><label>Upload File ECU Original</label><input type="file" name="ecu_file" accept=".bin,.ori,.hex,.zip,.rar" required><div class="note">Format: BIN, ORI, HEX, ZIP, RAR. Maksimal 150MB.</div></div>
<button type="submit" class="submit-btn">KIRIM ORDER & BAYAR SEKARANG</button>
</form>
</div>
</div>

<div class="footer-note">IDS ECU REPAIR SOPPENG — Remap ECU, tuning file, dan penambahan tenaga mesin.</div>
</div>`;
  const scripts = `function showOrderForm(){const form=document.getElementById("orderForm");form.style.display="block";setTimeout(function(){form.scrollIntoView({behavior:"smooth",block:"start"});},100);}`;
  return htmlResponse(pageWrap({ title: "Remap ECU IDS ECU REPAIR | Stage 1, File ECU, Tuning Diesel Indonesia", styles, body, scripts }));
}

async function handleAdminRemap(request, env) {
  const orders = await env.DB.prepare("SELECT * FROM remap_orders ORDER BY id DESC").all();
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:#0d0d0d;color:#fff;font-family:Arial,sans-serif;}.header{position:sticky;top:0;z-index:99;background:#111;border-bottom:2px solid #c00000;padding:14px 15px;display:flex;align-items:center;justify-content:space-between;gap:10px;box-shadow:0 0 20px rgba(255,0,0,.12);}.header-title{font-size:16px;font-weight:bold;color:#ff2b2b;line-height:1.4;}.nav-btn{background:#1b1b1b;border:1px solid #333;border-radius:9px;padding:8px 12px;color:#fff;text-decoration:none;font-size:12px;white-space:nowrap;}.container{width:100%;max-width:1050px;margin:auto;padding:14px;}.admin-version{font-size:11px;color:#777;margin:-5px 0 12px;}.section-title{font-size:18px;color:#ff2b2b;font-weight:bold;margin:8px 0 14px;}.order-card{background:#161616;border:1px solid #242424;border-radius:15px;margin-bottom:16px;overflow:hidden;box-shadow:0 0 18px rgba(255,0,0,.04);}.order-head{padding:14px;background:#111;border-bottom:1px solid #242424;display:flex;justify-content:space-between;gap:10px;align-items:flex-start;}.order-title{font-size:15px;color:#ff3c3c;font-weight:bold;line-height:1.4;}.order-id{font-size:12px;color:#999;margin-top:4px;line-height:1.5;}.badge{padding:6px 9px;border-radius:999px;font-size:11px;font-weight:bold;white-space:nowrap;text-align:center;background:#5c4500;color:#ffd35c;}.order-body{padding:14px;}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:13px;}.item{background:#101010;border:1px solid #282828;border-radius:10px;padding:10px;}.label{font-size:11px;color:#888;margin-bottom:5px;}.value{font-size:13px;color:#fff;line-height:1.5;word-break:break-word;}.file-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}.file-btn{display:inline-block;background:#c00000;color:#fff;text-decoration:none;border-radius:9px;padding:9px 11px;font-size:12px;font-weight:bold;}.empty{text-align:center;color:#777;padding:50px 15px;}`;
  const body = `
<div class="header"><div class="header-title">⚡ Admin Order Remap</div><a href="/dashboard/" class="nav-btn">Kembali</a></div>
<div class="container">
<div class="admin-version">VERSI BARU: kategori order + tombol hapus order</div>
<div class="section-title">Semua Order Remap</div>
${(orders.results || []).map(o => `
<div class="order-card">
<div class="order-head">
<div>
<div class="order-title">${esc(o.kendaraan || "-")} — ${esc(o.ecu_type || "-")}</div>
<div class="order-id">Order #${o.id} | ${esc(o.created_at || "-")}</div>
</div>
<div class="badge">${esc((o.payment_status || "pending").toUpperCase())} / ${esc(o.status || "-")}</div>
</div>
<div class="order-body">
<div class="grid">
<div class="item"><div class="label">Nama</div><div class="value">${esc(o.nama || "-")}</div></div>
<div class="item"><div class="label">WhatsApp</div><div class="value">${esc(o.whatsapp || "-")}</div></div>
<div class="item"><div class="label">Email Hasil</div><div class="value">${esc(o.email || "-")}</div></div>
<div class="item"><div class="label">Harga</div><div class="value">Rp ${Number(o.price || 0).toLocaleString("id-ID")}</div></div>
</div>
<div class="item">
<div class="label">Permintaan Setting</div>
<div class="value">${nl2brEsc(o.permintaan || "-")}</div>
</div>
<div class="file-row">
${o.ecu_file ? `<a class="file-btn" href="${esc(o.ecu_file)}">⬇ Download File ECU</a>` : ""}
${o.result_file ? `<a class="file-btn" href="${esc(o.result_file)}">✅ Download Hasil Remap</a>` : ""}
</div>
</div>
</div>`).join("") || `<div class="empty">Belum ada order remap.</div>`}
</div>`;
  return htmlResponse(pageWrap({ title: "Admin Order Remap - IDS ECU REPAIR", styles, body }));
}

async function handlePanduan() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}body{background:linear-gradient(rgba(0,0,0,.92),rgba(0,0,0,.94)),url('/bucket/css/bg-ecu.png');font-family:Arial,sans-serif;color:#fff;overflow-x:hidden;}.header{position:sticky;top:0;z-index:99;background:#111;padding:10px 14px;border-bottom:2px solid #c00000;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.header .logo{font-weight:bold;margin-left:14px;color:#ff2b2b;font-size:17px;letter-spacing:1px;}.back{background:#1d1d1d;border:1px solid #333;padding:7px 11px;border-radius:10px;text-decoration:none;color:#fff;font-size:13px;margin-right:10px;}.container{max-width:900px;margin:auto;padding:16px;}.banner{width:100%;height:220px;object-fit:cover;border-radius:18px;margin-bottom:20px;border:1px solid #222;box-shadow:0 0 20px rgba(255,0,0,.15);opacity:0;transform:scale(1.03);animation:bannerLoad .9s ease forwards;}.hero{text-align:center;margin-bottom:25px;}.hero h1{font-size:28px;color:#ff2b2b;margin-bottom:12px;}.hero p{font-size:14px;line-height:1.8;color:#bbb;max-width:760px;margin:auto;}.card{background:#161616;border:1px solid #242424;border-radius:18px;padding:18px;margin-bottom:18px;}.card h2{font-size:21px;color:#ff3c3c;margin-bottom:14px;}.card p{font-size:14px;line-height:1.8;color:#ccc;margin-bottom:10px;}.step{display:flex;gap:14px;margin-bottom:14px;background:#101010;border:1px solid #252525;padding:14px;border-radius:14px;}.num{min-width:38px;height:38px;border-radius:50%;background:#c00000;display:flex;align-items:center;justify-content:center;font-weight:bold;}.step-content h3{font-size:16px;margin-bottom:6px;color:#fff;}.step-content p{font-size:13px;line-height:1.7;color:#bbb;}.warning{background:#190909;border:1px solid #4a1515;}.warning ul{padding-left:20px;}.warning li{margin-bottom:10px;line-height:1.8;color:#ddd;}.safe-box{background:#101010;border:1px solid #252525;padding:14px;border-radius:14px;margin-top:12px;}.safe-box b{color:#00ff88;}.cta{position:sticky;bottom:0;padding:18px 0 12px;background:linear-gradient(to top,#0d0d0d 70%,transparent);}.btn{display:block;width:100%;max-width:500px;margin:auto;background:#c00000;padding:16px;border-radius:14px;text-align:center;text-decoration:none;color:#fff;font-weight:bold;font-size:15px;box-shadow:0 0 20px rgba(255,0,0,.25);}.btn:hover{background:#ff2b2b;}.footer{text-align:center;font-size:12px;color:#777;padding:18px;line-height:1.8;}@keyframes bannerLoad{0%{opacity:0;transform:scale(1.05);filter:blur(8px);}100%{opacity:1;transform:scale(1);filter:blur(0);}}@media(max-width:600px){.banner{height:150px;}.hero h1{font-size:22px;}.card{padding:15px;}.step{padding:12px;}}`;
  const body = `
<div class="header">
<div class="logo">⚡ Panduan ECU</div>
<a href="/" class="back">Home</a>
</div>

<div class="container">
<img src="/bucket/css/og-banner-read-write.png" class="banner">

<div class="hero">
<h1>Panduan Read & Write ECU</h1>
<p>Panduan ini menjelaskan proses membaca file ECU (READ), menulis file hasil tuning (WRITE), serta resiko keamanan data yang wajib diperhatikan sebelum melakukan remap ECU kendaraan.</p>
</div>

<div class="card">
<h2>Proses READ ECU</h2>
<div class="step"><div class="num">1</div><div class="step-content"><h3>Identifikasi ECU</h3><p>Pastikan tipe ECU kendaraan sesuai seperti Denso, Bosch, Delphi, Continental, Siemens, atau Magneti Marelli.</p></div></div>
<div class="step"><div class="num">2</div><div class="step-content"><h3>Gunakan Alat Yang Stabil</h3><p>Gunakan alat original atau alat yang sudah terbukti aman untuk membaca data ECU kendaraan.</p></div></div>
<div class="step"><div class="num">3</div><div class="step-content"><h3>Backup File Original</h3><p>Simpan file original sebelum tuning dilakukan. Backup original sangat penting untuk recovery ECU.</p></div></div>
<div class="step"><div class="num">4</div><div class="step-content"><h3>Jangan Putus Daya</h3><p>Saat proses READ berlangsung, jangan matikan kontak, cabut kabel OBD, atau memutus sumber listrik kendaraan.</p></div></div>
</div>

<div class="card">
<h2>Proses WRITE ECU</h2>
<div class="step"><div class="num">1</div><div class="step-content"><h3>Gunakan File Yang Sesuai</h3><p>Pastikan file hasil tuning sesuai dengan ECU kendaraan. Kesalahan file dapat menyebabkan ECU error atau mati total.</p></div></div>
<div class="step"><div class="num">2</div><div class="step-content"><h3>Gunakan Power Supply Stabil</h3><p>Gunakan charger atau power supply stabil minimal 13V agar proses flashing tidak gagal.</p></div></div>
<div class="step"><div class="num">3</div><div class="step-content"><h3>Tunggu Sampai Selesai</h3><p>Jangan mencabut kabel atau mematikan kendaraan sebelum proses write selesai 100%.</p></div></div>
<div class="step"><div class="num">4</div><div class="step-content"><h3>Clear DTC Setelah Flash</h3><p>Setelah proses selesai, lakukan scanning dan clear DTC jika terdapat fault code.</p></div></div>
</div>

<div class="card warning">
<h2>Resiko Keamanan Data ECU</h2>
<ul>
<li>Kesalahan file tuning dapat menyebabkan kendaraan tidak bisa hidup.</li>
<li>Write ECU gagal dapat menyebabkan boot error atau ECU blank.</li>
<li>Tegangan aki drop saat flashing dapat merusak data internal ECU.</li>
<li>File original hilang membuat recovery ECU menjadi lebih sulit.</li>
<li>Kesalahan checksum dapat menyebabkan limp mode atau MIL ON.</li>
<li>Penggunaan alat clone kualitas rendah meningkatkan resiko corrupt data.</li>
</ul>
<div class="safe-box"><b>Tips Aman:</b><br><br>Selalu backup file original, gunakan power supply stabil, dan pastikan file tuning berasal dari sumber terpercaya.</div>
</div>

<div class="card">
<h2>Rekomendasi Sebelum Remap</h2>
<p>✔ Pastikan kendaraan dalam kondisi sehat.<br>✔ Tidak ada error sensor utama.<br>✔ Injector dan turbo normal.<br>✔ Gunakan bahan bakar yang sesuai.<br>✔ Hindari tuning ekstrem untuk kendaraan harian.</p>
</div>

<div class="cta">
<a href="/panduan-read-and-write-ecu/remap-prosedur-order/" class="btn">LANJUTKAN REMAP ECU</a>
</div>

<div class="footer">IDS ECU REPAIR SOPPENG<br>Forum Repair ECU Indonesia</div>
</div>`;
  return htmlResponse(pageWrap({ title: "Panduan Read & Write ECU | IDS ECU REPAIR SOPPENG", styles, body }));
}

async function handleProsedur() {
  const styles = `*{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}body{background:linear-gradient(rgba(0,0,0,.92),rgba(0,0,0,.94)),url('/bucket/css/bg-ecu.png');font-family:Arial,sans-serif;color:#fff;overflow-x:hidden;}.header{position:sticky;top:0;z-index:99;background:#111;padding:10px 14px;border-bottom:2px solid #c00000;display:flex;justify-content:space-between;align-items:center;border:none!important;box-shadow:0 0 14px rgba(255,0,0,.45);}.header-title{font-weight:bold;margin-left:14px;color:#ff2b2b;font-size:17px;letter-spacing:1px;}.back{background:#1d1d1d;border:1px solid #333;padding:7px 11px;border-radius:10px;text-decoration:none;color:#fff;font-size:13px;margin-right:10px;}.back:hover{background:#c00000;}.container{width:100%;max-width:880px;margin:auto;padding:16px;}.hero{text-align:center;padding:24px 0 15px;}.banner{width:100%;height:220px;object-fit:cover;border-radius:18px;margin-bottom:20px;border:1px solid #222;box-shadow:0 0 20px rgba(255,0,0,.15);opacity:0;transform:scale(1.03);animation:bannerLoad .9s ease forwards;}.hero h1{font-size:26px;color:#ff2b2b;line-height:1.35;margin-bottom:12px;}.hero p{font-size:14px;line-height:1.8;color:#ccc;max-width:760px;margin:auto;}.card{background:#161616;border:1px solid #242424;border-radius:16px;padding:18px;margin-bottom:16px;box-shadow:0 0 18px rgba(255,0,0,.04);}.card h2{font-size:19px;color:#ff3c3c;margin-bottom:12px;line-height:1.4;}.card p,.card li{font-size:14px;line-height:1.8;color:#ccc;}.card ul{padding-left:20px;}.step-list{display:grid;gap:13px;}.step{background:#101010;border:1px solid #2a2a2a;border-radius:14px;padding:14px;display:flex;gap:13px;align-items:flex-start;}.step-num{min-width:38px;height:38px;border-radius:50%;background:#c00000;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 0 14px rgba(255,0,0,.25);}.step-body h3{font-size:16px;color:#fff;margin-bottom:6px;line-height:1.4;}.step-body p{font-size:13px;color:#bbb;line-height:1.7;}.warn{background:#120909;border:1px solid #4a1515;}.info-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-top:12px;}.info-box{background:#101010;border:1px solid #2a2a2a;border-radius:12px;padding:13px;font-size:13px;line-height:1.6;color:#ddd;}.info-box b{color:#ff3c3c;}.cta-wrap{position:sticky;bottom:0;z-index:50;background:linear-gradient(to top,#0d0d0d 75%,rgba(13,13,13,0));padding:18px 0 10px;margin-top:10px;}.cta-btn{width:100%;max-width:520px;margin:auto;display:block;background:#c00000;color:#fff;border:none;border-radius:14px;padding:15px;font-size:15px;font-weight:bold;text-decoration:none;text-align:center;box-shadow:0 0 20px rgba(255,0,0,.2);}.cta-btn:hover{background:#ff2b2b;}.footer-note{font-size:12px;color:#777;line-height:1.7;text-align:center;padding:10px 0 25px;}@keyframes bannerLoad{0%{opacity:0;transform:scale(1.05);filter:blur(8px);}100%{opacity:1;transform:scale(1);filter:blur(0);}}@media(max-width:600px){.container{padding:14px;}.banner{height:150px;}.hero h1{font-size:21px;}.hero p{font-size:13px;}.card{padding:15px;}.step{padding:13px;gap:10px;}.step-num{min-width:34px;height:34px;font-size:13px;}.step-body h3{font-size:15px;}.cta-btn{font-size:14px;border-radius:12px;}}`;
  const body = `
<div class="header">
<div class="header-title">⚡ Prosedur Remap ECU</div>
<a href="/" class="back">Home</a>
</div>

<div class="container">
<section class="hero">
<img src="/bucket/css/og-remap-prosedur-order.png" class="banner" alt="Prosedur Remap ECU IDS Repair">
<h1>Langkah-Langkah Order Remap ECU</h1>
<p>Panduan ini menjelaskan proses order remap ECU di IDS ECU REPAIR mulai dari persiapan file original, pengisian data kendaraan, pembayaran, proses tuning, sampai file hasil remap dikirim kembali ke email kamu.</p>
</section>

<div class="card">
<h2>Sebelum Melakukan Order</h2>
<p>Pastikan file ECU original sudah benar dan sesuai kendaraan. File bisa berasal dari proses read menggunakan alat programmer atau alat tuning yang mendukung ECU kendaraan kamu.</p>
<div class="info-grid">
<div class="info-box"><b>Format File</b><br>BIN, ORI, HEX, ZIP, atau RAR.</div>
<div class="info-box"><b>Data Kendaraan</b><br>Isi jenis kendaraan dan tipe ECU dengan jelas.</div>
<div class="info-box"><b>Email Aktif</b><br>Hasil remap dikirim ke email yang kamu masukkan.</div>
<div class="info-box"><b>Catatan Request</b><br>Tulis permintaan seperti Stage 1, EGR OFF, DPF OFF, atau custom.</div>
</div>
</div>

<div class="card">
<h2>Prosedur Order Remap ECU</h2>
<div class="step-list">
<div class="step"><div class="step-num">1</div><div class="step-body"><h3>Siapkan File ECU Original</h3><p>Pastikan file ECU yang akan dikirim adalah file original hasil read dari kendaraan sebelum diedit.</p></div></div>
<div class="step"><div class="step-num">2</div><div class="step-body"><h3>Isi Form Order Remap</h3><p>Masukkan nama, WhatsApp, email penerima file, jenis kendaraan, tipe ECU, dan permintaan setting.</p></div></div>
<div class="step"><div class="step-num">3</div><div class="step-body"><h3>Upload File ECU</h3><p>Upload file ECU original. Jika file banyak, kompres terlebih dahulu menjadi ZIP atau RAR.</p></div></div>
<div class="step"><div class="step-num">4</div><div class="step-body"><h3>Lakukan Pembayaran</h3><p>Sistem akan mengarahkan ke halaman pembayaran Duitku. Pilih metode pembayaran yang tersedia.</p></div></div>
<div class="step"><div class="step-num">5</div><div class="step-body"><h3>Order Masuk Proses</h3><p>Setelah pembayaran berhasil, status order otomatis masuk proses. Notifikasi dikirim melalui email dan dashboard jika login.</p></div></div>
<div class="step"><div class="step-num">6</div><div class="step-body"><h3>File Hasil Dikirim</h3><p>File hasil remap dikirim melalui email dan bisa dilihat di dashboard bagian file remap jika kamu login sebagai member.</p></div></div>
</div>
</div>

<div class="card warn">
<h2>Catatan Penting</h2>
<ul>
<li>Pastikan file ECU sesuai kendaraan dan tidak corrupt.</li>
<li>Kesalahan file original bisa membuat proses tuning tertunda.</li>
<li>Jelaskan permintaan setting dengan jelas agar hasil sesuai kebutuhan.</li>
<li>Estimasi proses normal maksimal 1 x 24 jam setelah pembayaran berhasil.</li>
</ul>
</div>

<div class="card">
<h2>Contoh Permintaan Setting</h2>
<p>Contoh penulisan permintaan: <b>Stage 1 harian, tenaga bawah tambah, throttle lebih responsif, EGR OFF, DPF OFF, tetap aman untuk harian.</b></p>
</div>

<div class="cta-wrap">
<a href="/remap/" class="cta-btn">LANJUTKAN REMAP ECU</a>
</div>

<div class="footer-note">IDS ECU REPAIR SOPPENG — Remap ECU, tuning file, dan penambahan tenaga mesin.</div>
</div>`;
  return htmlResponse(pageWrap({ title: "Prosedur Remap ECU | IDS ECU REPAIR SOPPENG", styles, body }));
}

function formatBytes(size) {
  size = Number(size || 0);
  if (!size) return "File tidak ditemukan";
  return size >= 1048576 ? (Math.round((size / 1048576) * 100) / 100) + " MB" : (Math.round((size / 1024) * 100) / 100) + " KB";
}

function formatDate(v) {
  if (!v) return "-";
  const d = new Date(v);
  if (isNaN(d.getTime())) return String(v);
  return d.toLocaleString("id-ID", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function formatDateShort(v) {
  if (!v) return "-";
  const d = new Date(v);
  if (isNaN(d.getTime())) return String(v);
  return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
}

function htmlResponse(html, status = 200) {
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS_HEADERS }
  });
}