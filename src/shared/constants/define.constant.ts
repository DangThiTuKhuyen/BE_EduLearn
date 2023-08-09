export const dateFormat = {
  dateOnlyFormat: 'YYYY-MM-DD',
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  timestampWithTimeZone: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  dateTimeISOFormat: 'YYYY-MM-DDTHH:mm:ss.SSSSSS',
  dateTimeISOWithTimeZoneFormat: 'YYYY-MM-DDTHH:mm:ss.SSSSSSZ',
  timeOnlyFormat: 'HH:mm:ss',
  scheduleDateFormat: 'YYYY-MM-DDT00:00:00.000\\Z',
  timestampWithZ: 'YYYY-MM-DDTHH:mm:ss.SSS\\Z',
  dateFormatWithVN: 'DD/MM/YYYY',
  dateTimeFormatVN: 'HH:mm:ss DD-MM-YYYY',
};

export const successResponse = {
  message: 'OK',
};

export const maxInt = 2147483647;
export const maxSmallInt = 32767;
export const maxBigInt = '9223372036854775807';

export const confirmVaccineEmail = {
  subject: 'You have successfully vaccinated vaccine {vaccine}',
  context: `
    <html>
    <head></head>
    <body>
    <br>
    Hi {name},<br>
    <br>
    {diseaseCenter} Vaccination Center would like to announce that you have successfully vaccinated.<br>
    Vaccine: {vaccine}.<br>
    Disease: {disease}.<br>
    Dose: {dose}.<br>
    Time: {time} <br>
    ----------------------------------<br>
    App Send<br>
    ----------------------------------
    </body>
    </html>`,
};

export const appointmentEmail = {
  subject: 'You have an appointment for your next injection on {time}',
  context: `
    <html>
    <head></head>
    <body>
    <br>
    Hi {name},<br>
    {diseaseCenter} Vaccination Center would like to notify you that you have an appointment for your next injection.<br>
    Vaccine: {vaccine}<br>
    Disease: {disease}<br>
    Dose: {dose}<br>
    Time: {time}<br>
    Please go to the right time for the vaccine to have the best effect.<br>
    ----------------------------------<br>
    App Send<br>
    ----------------------------------
    </body>
    </html>`,
};

export const registrationEmail = {
  subject: 'You have successfully registered for vaccination {vaccine}',
  context: `
    <html>
    <head></head>
    <body>
    <br>
    Hi {name},<br>
    {diseaseCenter} Vaccination Center would like to notify you that you have successfully registered for vaccination.<br>
    Vaccine: {vaccine}<br>
    Disease: {disease}<br>
    Dose: {dose}<br>
    Time: {time}<br>
    Please go to the right time for the vaccine to have the best effect.<br>
    ----------------------------------<br>
    App Send<br>
    ----------------------------------
    </body>
    </html>`,
};

export const acceptedEmail = {
  subject: 'Your {vaccine} vaccination registration has been confirmed.',
  context: `
    <html>
    <head></head>
    <body>
    <br>
    Hi {name},<br>
    {diseaseCenter} Vaccination Center would like to notify you that your vaccination registration has been confirmed.<br>
    Vaccine: {vaccine}<br>
    Disease: {disease}<br>
    Dose: {dose}<br>
    Time: {time}<br>
    Please go to the right time for the vaccine to have the best effect.<br>
    ----------------------------------<br>
    App Send<br>
    ----------------------------------
    </body>
    </html>`,
};

export const remindEmail = {
  subject: 'You have a vaccination appointment with us on {time}',
  context: `
    <html>
    <head></head>
    <body>
    <br>
    Hi {name},<br>
    {diseaseCenter} Vaccination Center reminds you to have an appointment for vaccination, remember to come on time for the best effect<br>
    Vaccine: {vaccine}<br>
    Disease: {disease}<br>
    Dose: {dose}<br>
    Time: {time}<br>
    Please go to the right time for the vaccine to have the best effect.<br>
    ----------------------------------<br>
    App Send<br>
    ----------------------------------
    </body>
    </html>`,
};
