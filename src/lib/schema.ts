import { z } from 'zod';

export const emailSchema = (requiredMsg: string, invalidMsg: string) =>
    z.string().trim().min(1, requiredMsg).email({ message: invalidMsg }).toLowerCase();

export const passwordSchema = (requiredMsg: string) => z.string().trim().min(1, requiredMsg);





// export const requiredString: (message: string) => z.ZodString = (message: string) => z.string().trim().min(1, message);

// export const optionalString: z.ZodString = z.string().optional();

// /** Regex for name fields allowing letters, spaces, and common punctuation */
// const NAME_PART_REGEX = /^[A-Za-z.,'\-\s]+$/;

// export const schemas = {
//     optional: z.string().optional(),
//     email: z
//         .string()
//         .trim()
//         .min(1, 'Email address required')
//         .email({ error: 'Invalid email address' })
//         .toLowerCase(),
//     optionalEmail: () => z.union([schemas.email, z.string().length(0)]).optional(),

//     // Standard (Weak) Password - Kept for legacy forms
//     password: z.string().trim().min(1, 'Password required'),

//     // Strong Password - Kept as 'newPassword' to preserve imports
//     newPassword: z
//         .string()
//         .trim()
//         .min(1, 'Password is required')
//         .superRefine((val, ctx) => {
//             if (val.length < 8) {
//                 ctx.addIssue({
//                     code: 'custom',
//                     message:
//                         'Password must contain at least 8 characters: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
//                 });
//             }
//             if (!/[A-Z]/.test(val)) {
//                 ctx.addIssue({
//                     code: 'custom',
//                     message:
//                         'Password must contain at least 8 characters: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
//                 });
//             }
//             if (!/[a-z]/.test(val)) {
//                 ctx.addIssue({
//                     code: 'custom',
//                     message:
//                         'Password must contain at least 8 characters: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
//                 });
//             }
//             if (!/[0-9]/.test(val)) {
//                 ctx.addIssue({
//                     code: 'custom',
//                     message:
//                         'Password must contain at least 8 characters: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
//                 });
//             }
//             if (!/[^A-Za-z0-9]/.test(val)) {
//                 ctx.addIssue({
//                     code: 'custom',
//                     message:
//                         'Password must contain at least 8 characters: 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
//                 });
//             }
//         }),
//     confirmPassword: z.string().trim().min(1, 'Please confirm your password'),

//     // Phone & Name Fields
//     phone: z
//         .string()
//         .trim()
//         .min(1, 'Phone number required')
//         .regex(/^\d{10}$/, 'Valid 10-digit phone number required'),
//     countryCode: requiredString('Required'),
//     phoneSetup: z
//         .string()
//         .trim()
//         .min(1, 'Phone number required')
//         .regex(/^\d{10}$/, 'Invalid phone number'),
//     fullName: z
//         .string()
//         .trim()
//         .min(2, {
//             message: 'Full name required',
//         })
//         .regex(/^[a-zA-Z\s]*$/, {
//             message: 'Invalid name',
//         })
//         .refine((name) => name.split(' ').length > 1, {
//             message: 'Full name required',
//         })
//         .refine((name) => name.length > 1 && name.split(' ').every((word) => word.length > 1), {
//             message: 'Invalid name',
//         }),

//     firstName: z
//         .string()
//         .trim()
//         .min(1, 'First name required')
//         .regex(NAME_PART_REGEX, 'Invalid first name'),
//     //.regex(NAME_PART_REGEX, `First name ${NAME_PART_ERROR_MSG}`),
//     middleName: z
//         .string()
//         .trim()
//         .regex(/^[A-Za-z.,'\-\s]*$/, 'Invalid middle name')
//         //.regex(/^[A-Za-z.,'\-\s]*$/, `Middle name ${NAME_PART_ERROR_MSG}`)
//         .optional()
//         .or(z.literal('')),
//     lastName: z
//         .string()
//         .trim()
//         .min(1, 'Last name required')
//         .regex(NAME_PART_REGEX, 'Invalid last name'),
//     //.regex(NAME_PART_REGEX, `Last name ${NAME_PART_ERROR_MSG}`),
//     businessName: z
//         .string()
//         .trim()
//         .min(2, {
//             message: 'Business name required',
//         })
//         .regex(/^[a-zA-Z\s]*$/, {
//             message: 'Invalid name',
//         }),
//     name: z.string().trim().min(2, 'Name is too short'),
//     contactPersonName: z
//         .string()
//         .trim()
//         .min(2, {
//             message: 'Contact Person Name is required',
//         })
//         .regex(/^[a-zA-Z\s]*$/, {
//             message: 'Enter valid alphabets only',
//         })
//         .refine((name) => name.split(' ').length > 1, {
//             message: 'Enter Full name',
//         })
//         .refine((name) => name.length > 1 && name.split(' ').every((word) => word.length > 1), {
//             message: 'Enter valid alphabets only',
//         }),

//     // Account & Bank Details
//     bankName: requiredString("Select recipient's bank name"),
//     bankId: requiredString('Please select a bank'),
//     accountNumber: z.string().trim().min(5, 'Account number required'),
//     ifsc: z
//         .string()
//         .min(1, 'IFSC required')
//         .length(11, { message: 'IFSC code must be exactly 11 characters long' })
//         .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, { message: 'Invalid IFSC format' })
//         .describe('Indian Financial System Code (IFSC)'),

//     // Address Fields
//     address: z
//         .string()
//         .trim()
//         .min(3, 'Address is required')
//         .max(40, 'Your street address must be between 3 and 40 characters long.'),
//     // Kept separate as requested, but logic is redundant with 'address' min(3)
//     recipientAddress: z.string().trim().min(3, 'Address required'),
//     recipientIndiaAddress: z
//         .string()
//         .trim()
//         .min(3, 'Address is required')
//         .max(90, 'Address must be no more than 90 characters'),

//     // Locations
//     state: requiredString('State required'),
//     county: requiredString('County required'),
//     city: requiredString('City required'),
//     country: requiredString('Country required'),
//     postalCode: z
//         .string()
//         .trim()
//         .regex(/^\d{5}$/, 'Enter a 5-digit ZIP code'),

//     // Support/Contact
//     subject: z.string().trim().min(3, 'Subject is too short'),
//     message: z.string().trim().min(3, 'Message is too short'),
//     enquiry: requiredString('Please select an enquiry type'),

//     // Terms and Other Selections
//     relation: requiredString('Select your relationship to the recipient'),
//     agreeTerms: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the Terms and Conditions.',
//     }),
//     gender: requiredString('Gender required'),
//     deliveryMethod: requiredString('Please select a delivery method'),
//     recipientSelected: requiredString('Recipient is required'),
//     purpose: requiredString('Purpose is required'),
//     purposeOther: z.string().trim().optional(),

//     // OTP and System
//     otpCode: z
//         .string()
//         .trim()
//         .regex(/^\d{6}$/, 'Please enter valid OTP'),
//     otpType: z.enum(ELoginOtpType).default(ELoginOtpType.EMAIL_OTP),
//     clientId: requiredString('Client Id is Missing'),
//     platform: z.enum(ESource).default(ESource.WEB),
//     appSignature: z.string().trim().optional(),
//     otpVerificationCode: z.string().trim(),
//     code: requiredString('code is required'),
//     referenceNumber: z.string().optional(), // Kept in place

//     // PIN Schemas (consolidated using the utility function)
//     pin: createPinSchema('PIN'),
//     currentPin: createPinSchema('Current PIN'),
//     newPin: createPinSchema('New PIN'),
//     confirmPin: createPinSchema('Confirm PIN'),

//     // Amounts
//     xvaAmount: (paymentModelData?: IPaymentModelData | null) => {
//         // Find WALLET_TRANSFER in deliverySpeed
//         const walletTransferMethod = paymentModelData?.deliverySpeed?.find(
//             (method) => method.type === EPaymentModeValues.WALLET_TRANSFER,
//         );

//         const minLimit = walletTransferMethod?.lowerLimit?.value ?? Config.minTransactionLimit;
//         const maxLimit = walletTransferMethod?.upperLimit?.value ?? Config.maxTransactionLimit;

//         return z
//             .string()
//             .trim()
//             .min(1, { message: 'Amount is required' })
//             .superRefine((val, ctx) => {
//                 const num = Number(val);

//                 if (isNaN(num)) {
//                     ctx.addIssue({
//                         code: 'custom',
//                         message: 'Invalid number',
//                     });
//                     return;
//                 }

//                 if (num < minLimit) {
//                     ctx.addIssue({
//                         code: 'custom',
//                         message: `Amount must be ${minLimit} or above`,
//                     });
//                 } else if (num > maxLimit) {
//                     ctx.addIssue({
//                         code: 'custom',
//                         message: `Amount must be ${maxLimit} or lower`,
//                     });
//                 }
//             });
//     },

//     snclAmount: (maxAmount: number, selectedDeliveryMethod?: IPaymentMethod | null) => {
//         const lowerLimit = selectedDeliveryMethod?.lowerLimit?.value ?? Config.minTransactionLimit;
//         const minLimit = lowerLimit > 0 ? lowerLimit : Config.minTransactionLimit;

//         return z
//             .string()
//             .trim()
//             .min(1, 'Amount is required')
//             .regex(/^[0-9]+(\.[0-9]{1,2})?$/, 'Invalid amount format')
//             .refine(
//                 (val) => {
//                     const num = Number(val);
//                     return num >= minLimit;
//                 },
//                 {
//                     message: 'Amount must be $10 or above.',
//                 },
//             )
//             .refine(
//                 (val) => {
//                     const num = Number(val);
//                     return num <= maxAmount;
//                 },
//                 {
//                     message: 'Enter an amount within your SNCL convertible balance',
//                 },
//             )
//             .refine(
//                 (val) => {
//                     const num = Number(val);
//                     return maxAmount - num >= lowerLimit || maxAmount - num === 0;
//                 },
//                 {
//                     message: `Please redeem your total amount, or keep a remaining balance of $${lowerLimit}`,
//                 },
//             );
//     },
//     couponCode: z.string().trim().min(1, 'Coupon code is required'),

//     // Dates and History
//     birthDate: z
//         .string()
//         .trim()
//         .min(1, 'Date of Birth required')
//         .refine(
//             (dateString) => {
//                 if (!dateString) {
//                     return false;
//                 }
//                 const birthDate = new Date(dateString);
//                 const today = new Date();
//                 const age = today.getFullYear() - birthDate.getFullYear();
//                 const monthDiff = today.getMonth() - birthDate.getMonth();

//                 const adjustedAge =
//                     monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())
//                         ? age - 1
//                         : age;

//                 return adjustedAge >= 18 && adjustedAge <= 110;
//             },
//             {
//                 message: 'Age must be between 18 and 110 years',
//             },
//         ),
//     fromDate: z.string().trim().optional(),
//     toDate: z.string().trim().optional(),
//     recipient: z.array(z.string()).optional(), // Likely a recipient ID array for history filtering

//     // SSN
//     ssn: z
//         .string()
//         .trim()
//         .min(1, { message: 'SSN required' })
//         .regex(/^\d{9}$/, { message: 'Invalid SSN' }),
//     confirmSSN: z.string().trim().min(1, { message: 'SSN required' }),
// };
