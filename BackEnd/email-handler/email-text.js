const EmailText = {
    VerifyOtp: (otp, link, inAppEmailTexts) => {
        return (
            `
            <div>
                <h1>Verify Otp</h1>

                <div>
                    <p>For Verification, Please enter this Otp: ${otp},</p>
                    <p>don't share this Otp with anyone</p>
                    <a href="${link}">[Link]</a>
                </div>
            </div>`
        );
    },
    // newAppointment: (name, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${name},</p>
    //                 <p>${inAppEmailTexts.emailBody}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>New Appointment Request</h1>

    //             <div>
    //                 <p>Dear ${name},</p>
    //                 <p>A patient has requested a new appointment with you, 
    //                 kindly open the app to respond to the request as soon as you can.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentAccept: (patientName, doctorName, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{doctorName}}/, doctorName)}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Appointment Accepted</h1>

    //             <div>
    //                 <p>Dear ${patientName},</p>
    //                 <p>${doctorName} has accepted your appointment, kindly open the app to complete the payment.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentDetailsToDoctor: (appointmentData, doctorName, timing, date, inAppEmailTexts) => {
    //     let { appointmentDetails, emailBody, salutation, title } = inAppEmailTexts.toObject();
    //     const obj = {
    //         "{{patientName}}": appointmentData.patientName,
    //         "{{timing}}": timing,
    //         "{{date}}": date
    //     }
    //     const _emailBody = inAppEmailTexts && emailBody.replace(/{{patientName}}|{{timing}}|{{date}}/gi, (matched) => obj[matched])

    //     return (
    //         `
    //         <div>
    //             <h1>${title}</h1>

    //             <div>
    //                 <p>${salutation} ${doctorName},</p>
    //                 <p>${_emailBody}</p>
    //                 <p>${appointmentDetails.detail_txt}</p>
                    
    //                 <div class="details-container">
    //                     <div class="details-container-head">
    //                         <span style="margin-left: 5px; margin-right: 5px;">${appointmentDetails.title1}</span>
    //                     </div>

    //                     <div>
    //                         <ul style="list-style: none;">
    //                             <li>${appointmentDetails.name.replace(/{{name}}/, appointmentData.patientName)}</li>
    //                             <li>${appointmentDetails.disease.replace(/{{disease}}/, appointmentData.disease)}</li>
    //                             <li>${appointmentDetails.painscale.replace(/{{painscale}}/, appointmentData.painScale)}</li>
    //                             <li>${appointmentDetails.price.replace(/{{price}}/, appointmentData.price)}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentDetailsToPatient: (appointmentData, doctorName, timing, date, inAppEmailTexts) => {
    //     let { appointmentDetails, emailBody, salutation, title } = inAppEmailTexts.toObject();
    //     const obj = {
    //         "{{doctorName}}": doctorName,
    //         "{{timing}}": timing,
    //         "{{date}}": date
    //     }
    //     const _emailBody = inAppEmailTexts && emailBody.replace(/{{doctorName}}|{{timing}}|{{date}}/gi, (matched) => obj[matched])

    //     return (
    //         `
    //         <div>
    //             <h1>${title}</h1>

    //             <div>
    //                 <p>${salutation} ${appointmentData.patientName},</p>
    //                 <p>${_emailBody}</p>
    //                 <p>${appointmentDetails.detail_txt}</p>
                    
    //                 <div class="details-container">
    //                     <div class="details-container-head">
    //                         <span style="margin-left: 5px; margin-right: 5px;">${appointmentDetails.title1}</span>
    //                     </div>

    //                     <div>
    //                         <ul style="list-style: none;">
    //                             <li>${appointmentDetails.name.replace(/{{name}}/, appointmentData.patientName)}</li>
    //                             <li>${appointmentDetails.disease.replace(/{{disease}}/, appointmentData.disease)}</li>
    //                             <li>${appointmentDetails.painscale.replace(/{{painscale}}/, appointmentData.painScale)}</li>
    //                             <li>${appointmentDetails.price.replace(/{{price}}/, appointmentData.price)}</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>`
    //     );
    // },
    // paymentCompleted: (patientName, doctorName, inAppEmailTexts) => {
    //     return (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${doctorName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{patientName}}/, patientName)}</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentReshedule: (patientName, doctorName, timing, date, inAppEmailTexts) => {
    //     const obj = {
    //         "{{doctorName}}": doctorName,
    //         "{{timing}}": timing,
    //         "{{date}}": date
    //     }
    //     const emailBody = inAppEmailTexts && inAppEmailTexts.emailBody.replace(/{{doctorName}}|{{timing}}|{{date}}/gi, (matched) => obj[matched])

    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <p>${emailBody}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Appointment Reschedule</h1>

    //             <div>
    //                 <p>Dear ${patientName},</p>
    //                 <p>${doctorName} would like to reschedule your requested appointment.
    //                 Please open the app and check the new ${timing} & ${date} before you proceed to the payment.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentCancelledByPatient: (patientName, doctorName, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${doctorName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{patientName}}/, patientName)}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Appointment Cancelled</h1>

    //             <div>
    //                 <p>Dear ${doctorName},</p>
    //                 <p>Unfortunately, ${patientName} has canceled his appointment.
    //                 We apologize for any inconvenience.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentCancelledByDoctor: (patientName, doctorName, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{doctorName}}/, doctorName)}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Appointment Cancelled</h1>

    //             <div>
    //                 <p>Dear ${patientName},</p>
    //                 <p>Unfortunately, ${doctorName} is not available at that time, 
    //                 Please select another doctor.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // recommendOtherSpecialist: (patientName, doctorName, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{doctorName}}/, doctorName)}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Doctor recommend other Specialist.</h1>

    //             <div>
    //                 <p>Dear ${patientName},</p>
    //                 <p>${doctorName} would like to recommened other specialist.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // appointmentSummary: (patientName, doctorName, inAppEmailTexts) => {
    //     return inAppEmailTexts ? (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <p>${inAppEmailTexts.emailBody.replace(/{{doctorName}}/, doctorName)}</p>
    //             </div>
    //         </div>`
    //     ) : (
    //         `
    //         <div>
    //             <h1>Appointment Summary</h1>

    //             <div>
    //                 <p>Dear ${patientName},</p>
    //                 <p>Consultation summary with ${doctorName} is ready to view.
    //                 Please open the app and check appointment summary in notification section.</p>
    //             </div>
    //         </div>`
    //     );
    // },
    // patientEmailActivation: (patientName, inAppEmailTexts) => {
    //     return (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${patientName},</p>
    //                 <span>${inAppEmailTexts.emailBody}</span>
    //             </div>
    //         </div>`
    //     );
    // },
    // sendOtp: (name, otpCode, inAppEmailTexts) => {
    //     return (
    //         `
    //         <div>
    //             <h1>${inAppEmailTexts.title}</h1>

    //             <div>
    //                 <p>${inAppEmailTexts.salutation} ${name},</p>
    //                 <span>${inAppEmailTexts.emailBody.replace(/{{otpCode}}/, otpCode)}</span><br />
    //             </div>
    //         </div>`
    //     );
    // },
    // send2FACode: (name, TfaCode, emailBody) => {
    //     return (
    //         `
    //         <div>
    //             <h1>2FA authentication code.</h1>

    //             <div>
    //                 <p>Dear ${name},</p>
    //                 <span>${emailBody.replace(/{{TfaCode}}/, TfaCode)}</span><br />
    //             </div>
    //         </div>`
    //     );
    // },
    // loginActivity: (name, email, emailBody, url) => {
    //     return (
    //         `
    //         <div>
    //             <h1>New device signed in</h1>

    //             <div>
    //                 <p>Dear ${name},</p>
    //                 <span>${emailBody}</span><br />
    //                 <a style="width:100px;height:40px;display:block;text-align:center;line-height:38px;background-color:#EF4B75;border-radius:10px;margin-top:10px;" href=${url}><span style="color:#fff;text-align:center;">Check Activity</span></button><br />
    //             </div>
    //         </div>`
    //     );
    // },
}

module.exports = EmailText;