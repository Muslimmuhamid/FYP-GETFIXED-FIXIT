// const emailtemplate = (emailBody, languageCode) => {
//     // console.log(languageCode)
//     return `
//         <!DOCTYPE html>
//         <html lang="en">

//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>Tabeeby Service</title>

//             <style type="text/css">
//                 @import url(https://fonts.googleapis.com/earlyaccess/droidarabicnaskh.css);

//                 @font-face {
//                     font-family: "Cairo-Regular";
//                     src: url("Cairo-Regular.ttf");
//                 }
//                 html,
//                 body {
//                     width: 100%;
//                     font-family: Cairo-Regular;
//                     font-size: 14px;
//                     line-height: 20px;
//                 }
        
//                 .clearfix {
//                     clear: both;
//                     min-height: 50px;
//                 }
        
//                 .img1 {
//                     height: 50px;
//                     line-height: 80px;
//                     vertical-align: middle;
//                     float: left;
//                 }
        
//                 .img2 {
//                     height: 80px;
//                     line-height: 80px;
//                     vertical-align: middle;
//                     float: right;
//                 }
        
        
//                 .footer {
//                     /* width: 315px;
//                             height: 26px; */
//                     opacity: 0.5;
//                     font-family: Muli;
//                     font-size: 10px;
//                     font-weight: normal;
//                     font-stretch: normal;
//                     font-style: normal;
//                     line-height: normal;
//                     letter-spacing: normal;
//                     text-align: center;
//                     color: #000000;
//                 }
        
//                 .btn-dft {
//                     height: 50px;
//                     border-radius: 30px !important;
//                     box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.27);
//                     border: solid 1px rgba(42, 144, 162, 0.1);
//                     background-color: #2a90a2;
//                     width: 50%;
//                     color: #fff;
//                     font-size: 14px;
        
//                 }
        
//                 .mt-25 {
//                     margin-top: 25px;
//                     padding-top: 60px;
//                 }
        
//                 .center-content {
//                     font-family: Arial, Helvetica, sans-serif;
//                     font-weight: bold;
//                     color: #000000;
//                     line-height: 1.3;
//                     /*  width: 315px;
//                         height: 152px; */
//                     width: auto;
        
//                 }
        
//                 .services {
//                     /* width: 50%; */
//                     height: 30px;
//                     font-family: Muli;
//                     font-size: 14px;
//                     font-weight: bold;
//                     font-stretch: normal;
//                     font-style: normal;
//                     line-height: normal;
//                     letter-spacing: 2px;
//                     text-align: center;
//                     color: #EF4B76;
//                 }
        
//                 .kfh {
//                     font-size: 0.9em;
//                     font-family: "Droid Arabic Naskh", serif;
//                 }
        
//                 .line {
//                     width: 50%;
//                     height: 1px;
//                     background-color: #dbeaed;
//                     margin-left: 25%;
//                 }
        
//                 /* --------------------------------------------------------------------------------- */
        
//                 .main-container {
//                     display: table;
//                     margin: 0 auto;
//                     width: 50%;
//                 }
        
//                 .container {
//                     /* display:flex; flex-direction: column; align-items:center; */
//                 }
        
//                 .header {
//                     text-align: center;
//                     flex: 2;
//                 }
        
//                 .end {
//                     background-color: #EF4B76;
//                     width: 100%;
//                     padding: 8px;
//                     text-align: center;
//                     font-weight: bolder;
//                     color: #fff;
//                 }
        
//                 .details-container {
//                     display: block;
//                     margin: 0 auto;
//                     margin-top: 30px;
//                     width: 300px;
//                     border: 1px solid #000000;
//                     border-collapse: collapse;
//                     border-radius: 10px;
//                 }
        
//                 .details-container-head {
//                     width: 300px;
//                     background-color:#EF4B76;
//                     display: flex;
//                     flex-direction: column;
//                     align-items: center;
//                     padding: 5px 0 5px 0;
//                     font-size: medium;
//                     color: #fff;
//                     text-align: center;
//                     border-radius: 10px 10px 0 0;
//                 }
        
//                 .welcome {
//                     /* align-items: flex-start; */
//                     background-color: #fcfcfc;
//                     /* padding-left: 30px; */
//                     border-radius: 5px;
//                     flex: 4;
//                     margin-top: 15px;
//                     padding: 20px 30px 20px 30px;
//                     color: #61615F;
//                 }
        
//                 .center {
//                     text-align: center;
//                     flex: 3;
//                     color: #61615F;
//                     margin-top: 50px;
//                 }
        
//                 .card-footer {
//                     margin-top: 30px;
//                 }
        
//                 .team-cls {
//                     font-weight: bolder;
//                 }
        
//                 a {
//                     text-decoration: none;
//                 }
//             </style>
//         </head>

//         <body dir="${languageCode == 'ar' ? 'rtl' : 'ltr'}" style="font-family: Cairo-Regular;">
//             <div class="main-container">
//                 <div class="container">
//                 <div class="header">
//                     <img style="width: 300px; " src="https://app.tabeeby.com/assets/tabeeby-logo.png">
//                 </div>

//                 <div class="welcome">
//                     ${emailBody}

//                     <div class="card-footer">
//                         <span>Best Regards, </span><br />
//                         <span class="team-cls">Tabeeby Team</span>
//                     </div>
//                 </div>

//                     <div class="center">
//                         <h3 style="font-weight: bold;">As always, we are happy to help</h3>
//                         <p>Throughout your journey with Tabeeby, we'll<br /> be here to answer your questions.</p>
//                         <p>Connect with us</p>
//                         <h3>support@tabeeby.com</h3>

//                         <div style="flex-direction: row;">
//                             <a target="new" href="https://www.facebook.com/Tabeebycom">
//                                 <img style="padding:5px; width:40px; " src="https://app.tabeeby.com/assets/fb.png">
//                             </a>

//                             <a target="new" href="https://twitter.com/tabeeby_kw">
//                                 <img style="padding:5px; width:40px; " src="https://app.tabeeby.com/assets/twitter.png">
//                             </a>

//                             <a target="blank"
//                                 href="https://www.linkedin.com/company/tabeeby-com-%D9%85%D9%88%D9%82%D8%B9-%D8%B7%D8%A8%D9%8A%D8%A8%D9%8A">
//                                 <img style="padding:5px; width:40px; " src="https://app.tabeeby.com/assets/linkedin.png">
//                             </a>

//                             <a target="blank" href="https://www.instagram.com/tabeeby/">
//                                 <img style="padding:5px; width:40px; " src="https://app.tabeeby.com/assets/instagram.png">
//                             </a>

//                             <a target="blank" href="https://www.youtube.com/user/Tabeebycom">
//                                 <img style="padding:5px; width:40px; " src="https://app.tabeeby.com/assets/youtube.png">
//                             </a>
//                         </div>

//                         <h2 style="margin-bottom: -20px;">BHM Int.LLC.</h2>
//                         <h3>Kuwait city, Kuwait</h3>
//                     </div>

//                     <div>
//                         <div class="end">
//                             © 2020 Tabeeby
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </body>

//         </html>
//     `
// }

// module.exports = {emailtemplate};