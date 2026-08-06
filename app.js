 /* =====================================
   JANIYA Customer Marketing System
   Main Style
===================================== */


*{

    margin:0;
    padding:0;
    box-sizing:border-box;

}


body{

    font-family:Arial, sans-serif;

    background:#f3f4f6;

    color:#111827;

}



.container{

    display:flex;

    min-height:100vh;

}



/* =========================
   Sidebar
========================= */


.sidebar{

    width:260px;

    background:#111827;

    color:white;

    padding:25px;

}



.logo{

    text-align:center;

    margin-bottom:40px;

}


.logo h2{

    font-size:30px;

}



.logo p{

    font-size:14px;

    color:#9ca3af;

}



nav{

    display:flex;

    flex-direction:column;

    gap:15px;

}



.menu-btn{

    border:none;

    background:none;

    color:white;

    padding:15px;

    text-align:left;

    font-size:16px;

    cursor:pointer;

    border-radius:10px;

}



.menu-btn:hover,
.menu-btn.active{

    background:#2563eb;

}



/* =========================
   Main Content
========================= */


.content{

    flex:1;

    padding:40px;

}



.page{

    display:none;

}



.active-page{

    display:block;

}



h1{

    margin-bottom:30px;

}



/* =========================
   Dashboard Cards
========================= */


.cards{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:25px;

}



.card{

    background:white;

    padding:30px;

    border-radius:15px;

    box-shadow:0 5px 15px rgba(0,0,0,0.08);

}



.card h3{

    margin-bottom:15px;

    color:#6b7280;

}



.card h2{

    font-size:35px;

}



/* =========================
   Sections
========================= */


.page p{

    background:white;

    padding:25px;

    border-radius:12px;

}
