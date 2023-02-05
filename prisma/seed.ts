import { EentertainmentTypes, PrismaClient } from "@prisma/client"
import { USERS } from "./users"
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()
async function main() {
	// USERS.map(async user => {
	// 	await prisma.user.upsert({
	// 		where: { email: user.email },
	// 		update: {},
	// 		create: {
	// 			email: user.email,
	// 			username: user.user_name,
	// 			password: user.password,
	// 		},
	// 	})
	//
	const Ent = [EentertainmentTypes.BOOKS, EentertainmentTypes.GAMES,EentertainmentTypes.HOBBIES,EentertainmentTypes.MOVIES, EentertainmentTypes.MUSIC_ARTISTS,EentertainmentTypes.TV_SHOWS] 
	for(let i = 0; i < 500 ; i++){
		await prisma.entertainment.create({
			data:{
				title:faker.music.songName(),
				type:EentertainmentTypes[Ent[i%6]]
			}
		})
	}

	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (1, 'AF', 'Afghanistan', 93)`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (2, 'AL', 'Albania', 355);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (3, 'DZ', 'Algeria', 213);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (4, 'AS', 'American Samoa', 1684);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (5, 'AD', 'Andorra', 376);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (6, 'AO', 'Angola', 244);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (7, 'AI', 'Anguilla', 1264);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (8, 'AQ', 'Antarctica', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (9, 'AG', 'Antigua And Barbuda', 1268);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (10, 'AR', 'Argentina', 54);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (11, 'AM', 'Armenia', 374);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (12, 'AW', 'Aruba', 297);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (13, 'AU', 'Australia', 61);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (14, 'AT', 'Austria', 43);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (15, 'AZ', 'Azerbaijan', 994);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (16, 'BS', 'Bahamas The', 1242);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (17, 'BH', 'Bahrain', 973);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (18, 'BD', 'Bangladesh', 880);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (19, 'BB', 'Barbados', 1246);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (20, 'BY', 'Belarus', 375);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (21, 'BE', 'Belgium', 32);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (22, 'BZ', 'Belize', 501);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (23, 'BJ', 'Benin', 229);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (24, 'BM', 'Bermuda', 1441);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (25, 'BT', 'Bhutan', 975);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (26, 'BO', 'Bolivia', 591);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (27, 'BA', 'Bosnia and Herzegovina', 387);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (28, 'BW', 'Botswana', 267);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (29, 'BV', 'Bouvet Island', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (30, 'BR', 'Brazil', 55);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (31, 'IO', 'British Indian Ocean Territory', 246);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (32, 'BN', 'Brunei', 673);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (33, 'BG', 'Bulgaria', 359);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (34, 'BF', 'Burkina Faso', 226);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (35, 'BI', 'Burundi', 257);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (36, 'KH', 'Cambodia', 855);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (37, 'CM', 'Cameroon', 237);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (38, 'CA', 'Canada', 1);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (39, 'CV', 'Cape Verde', 238);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (40, 'KY', 'Cayman Islands', 1345);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (41, 'CF', 'Central African Republic', 236);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (42, 'TD', 'Chad', 235);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (43, 'CL', 'Chile', 56);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (44, 'CN', 'China', 86);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (45, 'CX', 'Christmas Island', 61);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (46, 'CC', 'Cocos ', 672);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (47, 'CO', 'Colombia', 57);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (48, 'KM', 'Comoros', 269);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (49, 'CG', 'Congo', 242);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (50, 'CD', 'Congo The Democratic Republic Of The', 242);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (51, 'CK', 'Cook Islands', 682);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (52, 'CR', 'Costa Rica', 506);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (53, 'CI', 'Cote D''Ivoire ', 225);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (54, 'HR', 'Croatia ', 385);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (55, 'CU', 'Cuba', 53);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (56, 'CY', 'Cyprus', 357);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (57, 'CZ', 'Czech Republic', 420);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (58, 'DK', 'Denmark', 45);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (59, 'DJ', 'Djibouti', 253);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (60, 'DM', 'Dominica', 1767);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (61, 'DO', 'Dominican Republic', 1809);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (62, 'TP', 'East Timor', 670);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (63, 'EC', 'Ecuador', 593);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (64, 'EG', 'Egypt', 20);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (65, 'SV', 'El Salvador', 503);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (66, 'GQ', 'Equatorial Guinea', 240);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (67, 'ER', 'Eritrea', 291);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (68, 'EE', 'Estonia', 372);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (69, 'ET', 'Ethiopia', 251);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (70, 'XA', 'External Territories of Australia', 61);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (71, 'FK', 'Falkland Islands', 500);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (72, 'FO', 'Faroe Islands', 298);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (73, 'FJ', 'Fiji Islands', 679);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (74, 'FI', 'Finland', 358);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (75, 'FR', 'France', 33);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (76, 'GF', 'French Guiana', 594);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (77, 'PF', 'French Polynesia', 689);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (78, 'TF', 'French Southern Territories', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (79, 'GA', 'Gabon', 241);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (80, 'GM', 'Gambia The', 220);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (81, 'GE', 'Georgia', 995);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (82, 'DE', 'Germany', 49);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (83, 'GH', 'Ghana', 233);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (84, 'GI', 'Gibraltar', 350);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (85, 'GR', 'Greece', 30);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (86, 'GL', 'Greenland', 299);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (87, 'GD', 'Grenada', 1473);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (88, 'GP', 'Guadeloupe', 590);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (89, 'GU', 'Guam', 1671);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (90, 'GT', 'Guatemala', 502);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (91, 'XU', 'Guernsey and Alderney', 44);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (92, 'GN', 'Guinea', 224);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (93, 'GW', 'Guinea-Bissau', 245);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (94, 'GY', 'Guyana', 592);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (95, 'HT', 'Haiti', 509);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (96, 'HM', 'Heard and McDonald Islands', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (97, 'HN', 'Honduras', 504);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (98, 'HK', 'Hong Kong S.A.R.', 852);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (99, 'HU', 'Hungary', 36);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (100, 'IS', 'Iceland', 354);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (101, 'IN', 'India', 91);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (102, 'ID', 'Indonesia', 62);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (103, 'IR', 'Iran', 98);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (104, 'IQ', 'Iraq', 964);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (105, 'IE', 'Ireland', 353);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (106, 'IL', 'Israel', 972);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (107, 'IT', 'Italy', 39);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (108, 'JM', 'Jamaica', 1876);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (109, 'JP', 'Japan', 81);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (110, 'XJ', 'Jersey', 44);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (111, 'JO', 'Jordan', 962);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (112, 'KZ', 'Kazakhstan', 7);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (113, 'KE', 'Kenya', 254);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (114, 'KI', 'Kiribati', 686);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (115, 'KP', 'Korea North', 850);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (116, 'KR', 'Korea South', 82);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (117, 'KW', 'Kuwait', 965);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (118, 'KG', 'Kyrgyzstan', 996);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (119, 'LA', 'Laos', 856);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (120, 'LV', 'Latvia', 371);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (121, 'LB', 'Lebanon', 961);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (122, 'LS', 'Lesotho', 266);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (123, 'LR', 'Liberia', 231);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (124, 'LY', 'Libya', 218);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (125, 'LI', 'Liechtenstein', 423);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (126, 'LT', 'Lithuania', 370);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (127, 'LU', 'Luxembourg', 352);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (128, 'MO', 'Macau S.A.R.', 853);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (129, 'MK', 'Macedonia', 389);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (130, 'MG', 'Madagascar', 261);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (131, 'MW', 'Malawi', 265);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (132, 'MY', 'Malaysia', 60);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (133, 'MV', 'Maldives', 960);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (134, 'ML', 'Mali', 223);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (135, 'MT', 'Malta', 356);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (136, 'XM', 'Man ', 44);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (137, 'MH', 'Marshall Islands', 692);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (138, 'MQ', 'Martinique', 596);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (139, 'MR', 'Mauritania', 222);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (140, 'MU', 'Mauritius', 230);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (141, 'YT', 'Mayotte', 269);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (142, 'MX', 'Mexico', 52);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (143, 'FM', 'Micronesia', 691);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (144, 'MD', 'Moldova', 373);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (145, 'MC', 'Monaco', 377);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (146, 'MN', 'Mongolia', 976);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (147, 'MS', 'Montserrat', 1664);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (148, 'MA', 'Morocco', 212);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (149, 'MZ', 'Mozambique', 258);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (150, 'MM', 'Myanmar', 95);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (151, 'NA', 'Namibia', 264);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (152, 'NR', 'Nauru', 674);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (153, 'NP', 'Nepal', 977);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (154, 'AN', 'Netherlands Antilles', 599);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (155, 'NL', 'Netherlands The', 31);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (156, 'NC', 'New Caledonia', 687);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (157, 'NZ', 'New Zealand', 64);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (158, 'NI', 'Nicaragua', 505);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (159, 'NE', 'Niger', 227);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (160, 'NG', 'Nigeria', 234);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (161, 'NU', 'Niue', 683);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (162, 'NF', 'Norfolk Island', 672);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (163, 'MP', 'Northern Mariana Islands', 1670);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (164, 'NO', 'Norway', 47);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (165, 'OM', 'Oman', 968);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (166, 'PK', 'Pakistan', 92);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (167, 'PW', 'Palau', 680);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (168, 'PS', 'Palestinian Territory Occupied', 970);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (169, 'PA', 'Panama', 507);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (170, 'PG', 'Papua new Guinea', 675);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (171, 'PY', 'Paraguay', 595);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (172, 'PE', 'Peru', 51);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (173, 'PH', 'Philippines', 63);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (174, 'PN', 'Pitcairn Island', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (175, 'PL', 'Poland', 48);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (176, 'PT', 'Portugal', 351);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (177, 'PR', 'Puerto Rico', 1787);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (178, 'QA', 'Qatar', 974);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (179, 'RE', 'Reunion', 262);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (180, 'RO', 'Romania', 40);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (181, 'RU', 'Russia', 70);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (182, 'RW', 'Rwanda', 250);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (183, 'SH', 'Saint Helena', 290);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (184, 'KN', 'Saint Kitts And Nevis', 1869);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (185, 'LC', 'Saint Lucia', 1758);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (186, 'PM', 'Saint Pierre and Miquelon', 508);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (187, 'VC', 'Saint Vincent And The Grenadines', 1784);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (188, 'WS', 'Samoa', 684);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (189, 'SM', 'San Marino', 378);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (190, 'ST', 'Sao Tome and Principe', 239);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (191, 'SA', 'Saudi Arabia', 966);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (192, 'SN', 'Senegal', 221);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (193, 'RS', 'Serbia', 381);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (194, 'SC', 'Seychelles', 248);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (195, 'SL', 'Sierra Leone', 232);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (196, 'SG', 'Singapore', 65);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (197, 'SK', 'Slovakia', 421);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (198, 'SI', 'Slovenia', 386);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (199, 'XG', 'Smaller Territories of the UK', 44);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (200, 'SB', 'Solomon Islands', 677);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (201, 'SO', 'Somalia', 252);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (202, 'ZA', 'South Africa', 27);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (203, 'GS', 'South Georgia', 0);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (204, 'SS', 'South Sudan', 211);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (205, 'ES', 'Spain', 34);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (206, 'LK', 'Sri Lanka', 94);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (207, 'SD', 'Sudan', 249);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (208, 'SR', 'Suriname', 597);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (209, 'SJ', 'Svalbard And Jan Mayen Islands', 47);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (210, 'SZ', 'Swaziland', 268);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (211, 'SE', 'Sweden', 46);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (212, 'CH', 'Switzerland', 41);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (213, 'SY', 'Syria', 963);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (214, 'TW', 'Taiwan', 886);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (215, 'TJ', 'Tajikistan', 992);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (216, 'TZ', 'Tanzania', 255);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (217, 'TH', 'Thailand', 66);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (218, 'TG', 'Togo', 228);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (219, 'TK', 'Tokelau', 690);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (220, 'TO', 'Tonga', 676);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (221, 'TT', 'Trinidad And Tobago', 1868);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (222, 'TN', 'Tunisia', 216);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (223, 'TR', 'Turkey', 90);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (224, 'TM', 'Turkmenistan', 7370);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (225, 'TC', 'Turks And Caicos Islands', 1649);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (226, 'TV', 'Tuvalu', 688);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (227, 'UG', 'Uganda', 256);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (228, 'UA', 'Ukraine', 380);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (229, 'AE', 'United Arab Emirates', 971);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (230, 'GB', 'United Kingdom', 44);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (231, 'US', 'United "City"', 1);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (232, 'UM', 'United "City" Minor Outlying Islands', 1);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (233, 'UY', 'Uruguay', 598);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (234, 'UZ', 'Uzbekistan', 998);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (235, 'VU', 'Vanuatu', 678);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (236, 'VA', 'Vatican City State ', 39);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (237, 'VE', 'Venezuela', 58);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (238, 'VN', 'Vietnam', 84);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (239, 'VG', 'Virgin Islands ', 1284);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (240, 'VI', 'Virgin Islands ', 1340);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (241, 'WF', 'Wallis And Futuna Islands', 681);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (242, 'EH', 'Western Sahara', 212);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (243, 'YE', 'Yemen', 967);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (244, 'YU', 'Yugoslavia', 38);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (245, 'ZM', 'Zambia', 260);`
	await prisma.$executeRaw`insert into "Country" (id, shortname, name, phonecode) values (246, 'ZW', 'Zimbabwe', 263);`

	await prisma.$executeRaw`	insert into "City" (id, name, "countryId") values (1, 'Andaman and Nicobar Islands', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2, 'Andhra Pradesh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3, 'Arunachal Pradesh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4, 'Assam', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (5, 'Bihar', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (6, 'Chandigarh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (7, 'Chhattisgarh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (8, 'Dadra and Nagar Haveli', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (9, 'Daman and Diu', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (10, 'Delhi', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (11, 'Goa', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (12, 'Gujarat', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (13, 'Haryana', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (14, 'Himachal Pradesh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (15, 'Jammu and Kashmir', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (16, 'Jharkhand', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (17, 'Karnataka', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (18, 'Kenmore', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (19, 'Kerala', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (20, 'Lakshadweep', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (21, 'Madhya Pradesh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (22, 'Maharashtra', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (23, 'Manipur', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (24, 'Meghalaya', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (25, 'Mizoram', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (26, 'Nagaland', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (27, 'Narora', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (28, 'Natwar', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (29, 'Odisha', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (30, 'Paschim Medinipur', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (31, 'Pondicherry', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (32, 'Punjab', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (33, 'Rajasthan', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (34, 'Sikkim', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (35, 'Tamil Nadu', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (36, 'Telangana', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (37, 'Tripura', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (38, 'Uttar Pradesh', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (39, 'Uttarakhand', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (40, 'Vaishali', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (41, 'West Bengal', 101);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (42, 'Badakhshan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (43, 'Badgis', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (44, 'Baglan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (45, 'Balkh', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (46, 'Bamiyan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (47, 'Farah', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (48, 'Faryab', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (49, 'Gawr', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (50, 'Gazni', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (51, 'Herat', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (52, 'Hilmand', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (53, 'Jawzjan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (54, 'Kabul', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (55, 'Kapisa', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (56, 'Khawst', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (57, 'Kunar', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (58, 'Lagman', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (59, 'Lawghar', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (60, 'Nangarhar', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (61, 'Nimruz', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (62, 'Nuristan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (63, 'Paktika', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (64, 'Paktiya', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (65, 'Parwan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (66, 'Qandahar', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (67, 'Qunduz', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (68, 'Samangan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (69, 'Sar-e Pul', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (70, 'Takhar', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (71, 'Uruzgan', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (72, 'Wardag', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (73, 'Zabul', 1);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (74, 'Berat', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (75, 'Bulqize', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (76, 'Delvine', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (77, 'Devoll', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (78, 'Dibre', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (79, 'Durres', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (80, 'Elbasan', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (81, 'Fier', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (82, 'Gjirokaster', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (83, 'Gramsh', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (84, 'Has', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (85, 'Kavaje', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (86, 'Kolonje', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (87, 'Korce', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (88, 'Kruje', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (89, 'Kucove', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (90, 'Kukes', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (91, 'Kurbin', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (92, 'Lezhe', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (93, 'Librazhd', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (94, 'Lushnje', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (95, 'Mallakaster', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (96, 'Malsi e Madhe', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (97, 'Mat', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (98, 'Mirdite', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (99, 'Peqin', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (100, 'Permet', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (101, 'Pogradec', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (102, 'Puke', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (103, 'Sarande', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (104, 'Shkoder', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (105, 'Skrapar', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (106, 'Tepelene', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (107, 'Tirane', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (108, 'Tropoje', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (109, 'Vlore', 2);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (110, '''Ayn Daflah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (111, '''Ayn Tamushanat', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (112, 'Adrar', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (113, 'Algiers', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (114, 'Annabah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (115, 'Bashshar', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (116, 'Batnah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (117, 'Bijayah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (118, 'Biskrah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (119, 'Blidah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (120, 'Buirah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (121, 'Bumardas', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (122, 'Burj Bu Arririj', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (123, 'Ghalizan', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (124, 'Ghardayah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (125, 'Ilizi', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (126, 'Jijili', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (127, 'Jilfah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (128, 'Khanshalah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (129, 'Masilah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (130, 'Midyah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (131, 'Milah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (132, 'Muaskar', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (133, 'Mustaghanam', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (134, 'Naama', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (135, 'Oran', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (136, 'Ouargla', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (137, 'Qalmah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (138, 'Qustantinah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (139, 'Sakikdah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (140, 'Satif', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (141, 'Sayda''', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (142, 'Sidi ban-al-''Abbas', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (143, 'Suq Ahras', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (144, 'Tamanghasat', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (145, 'Tibazah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (146, 'Tibissah', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (147, 'Tilimsan', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (148, 'Tinduf', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (149, 'Tisamsilt', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (150, 'Tiyarat', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (151, 'Tizi Wazu', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (152, 'Umm-al-Bawaghi', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (153, 'Wahran', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (154, 'Warqla', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (155, 'Wilaya d Alger', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (156, 'Wilaya de Bejaia', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (157, 'Wilaya de Constantine', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (158, 'al-Aghwat', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (159, 'al-Bayadh', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (160, 'al-Jaza''ir', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (161, 'al-Wad', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (162, 'ash-Shalif', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (163, 'at-Tarif', 3);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (164, 'Eastern', 4);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (165, 'Manu''a', 4);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (166, 'Swains Island', 4);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (167, 'Western', 4);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (168, 'Andorra la Vella', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (169, 'Canillo', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (170, 'Encamp', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (171, 'La Massana', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (172, 'Les Escaldes', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (173, 'Ordino', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (174, 'Sant Julia de Loria', 5);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (175, 'Bengo', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (176, 'Benguela', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (177, 'Bie', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (178, 'Cabinda', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (179, 'Cunene', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (180, 'Huambo', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (181, 'Huila', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (182, 'Kuando-Kubango', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (183, 'Kwanza Norte', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (184, 'Kwanza Sul', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (185, 'Luanda', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (186, 'Lunda Norte', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (187, 'Lunda Sul', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (188, 'Malanje', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (189, 'Moxico', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (190, 'Namibe', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (191, 'Uige', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (192, 'Zaire', 6);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (193, 'Other Provinces', 7);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (194, 'Sector claimed by Argentina/Ch', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (195, 'Sector claimed by Argentina/UK', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (196, 'Sector claimed by Australia', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (197, 'Sector claimed by France', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (198, 'Sector claimed by New Zealand', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (199, 'Sector claimed by Norway', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (200, 'Unclaimed Sector', 8);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (201, 'Barbuda', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (202, 'Saint George', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (203, 'Saint John', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (204, 'Saint Mary', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (205, 'Saint Paul', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (206, 'Saint Peter', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (207, 'Saint Philip', 9);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (208, 'Buenos Aires', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (209, 'Catamarca', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (210, 'Chaco', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (211, 'Chubut', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (212, 'Cordoba', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (213, 'Corrientes', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (214, 'Distrito Federal', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (215, 'Entre Rios', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (216, 'Formosa', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (217, 'Jujuy', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (218, 'La Pampa', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (219, 'La Rioja', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (220, 'Mendoza', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (221, 'Misiones', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (222, 'Neuquen', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (223, 'Rio Negro', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (224, 'Salta', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (225, 'San Juan', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (226, 'San Luis', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (227, 'Santa Cruz', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (228, 'Santa Fe', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (229, 'Santiago del Estero', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (230, 'Tierra del Fuego', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (231, 'Tucuman', 10);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (232, 'Aragatsotn', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (233, 'Ararat', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (234, 'Armavir', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (235, 'Gegharkunik', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (236, 'Kotaik', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (237, 'Lori', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (238, 'Shirak', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (239, 'Stepanakert', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (240, 'Syunik', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (241, 'Tavush', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (242, 'Vayots Dzor', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (243, 'Yerevan', 11);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (244, 'Aruba', 12);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (245, 'Auckland', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (246, 'Australian Capital Territory', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (247, 'Balgowlah', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (248, 'Balmain', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (249, 'Bankstown', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (250, 'Baulkham Hills', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (251, 'Bonnet Bay', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (252, 'Camberwell', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (253, 'Carole Park', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (254, 'Castle Hill', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (255, 'Caulfield', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (256, 'Chatswood', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (257, 'Cheltenham', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (258, 'Cherrybrook', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (259, 'Clayton', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (260, 'Collingwood', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (261, 'Frenchs Forest', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (262, 'Hawthorn', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (263, 'Jannnali', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (264, 'Knoxfield', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (265, 'Melbourne', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (266, 'New South Wales', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (267, 'Northern Territory', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (268, 'Perth', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (269, 'Queensland', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (270, 'South Australia', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (271, 'Tasmania', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (272, 'Templestowe', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (273, 'Victoria', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (274, 'Werribee south', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (275, 'Western Australia', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (276, 'Wheeler', 13);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (277, 'Bundesland Salzburg', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (278, 'Bundesland Steiermark', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (279, 'Bundesland Tirol', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (280, 'Burgenland', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (281, 'Carinthia', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (282, 'Karnten', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (283, 'Liezen', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (284, 'Lower Austria', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (285, 'Niederosterreich', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (286, 'Oberosterreich', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (287, 'Salzburg', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (288, 'Schleswig-Holstein', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (289, 'Steiermark', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (290, 'Styria', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (291, 'Tirol', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (292, 'Upper Austria', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (293, 'Vorarlberg', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (294, 'Wien', 14);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (295, 'Abseron', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (296, 'Baki Sahari', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (297, 'Ganca', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (298, 'Ganja', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (299, 'Kalbacar', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (300, 'Lankaran', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (301, 'Mil-Qarabax', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (302, 'Mugan-Salyan', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (303, 'Nagorni-Qarabax', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (304, 'Naxcivan', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (305, 'Priaraks', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (306, 'Qazax', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (307, 'Saki', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (308, 'Sirvan', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (309, 'Xacmaz', 15);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (310, 'Abaco', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (311, 'Acklins Island', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (312, 'Andros', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (313, 'Berry Islands', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (314, 'Biminis', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (315, 'Cat Island', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (316, 'Crooked Island', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (317, 'Eleuthera', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (318, 'Exuma and Cays', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (319, 'Grand Bahama', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (320, 'Inagua Islands', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (321, 'Long Island', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (322, 'Mayaguana', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (323, 'New Providence', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (324, 'Ragged Island', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (325, 'Rum Cay', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (326, 'San Salvador', 16);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (327, '''Isa', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (328, 'Badiyah', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (329, 'Hidd', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (330, 'Jidd Hafs', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (331, 'Mahama', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (332, 'Manama', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (333, 'Sitrah', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (334, 'al-Manamah', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (335, 'al-Muharraq', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (336, 'ar-Rifa''a', 17);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (337, 'Bagar Hat', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (338, 'Bandarban', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (339, 'Barguna', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (340, 'Barisal', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (341, 'Bhola', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (342, 'Bogora', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (343, 'Brahman Bariya', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (344, 'Chandpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (345, 'Chattagam', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (346, 'Chittagong Division', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (347, 'Chuadanga', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (348, 'Dhaka', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (349, 'Dinajpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (350, 'Faridpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (351, 'Feni', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (352, 'Gaybanda', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (353, 'Gazipur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (354, 'Gopalganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (355, 'Habiganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (356, 'Jaipur Hat', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (357, 'Jamalpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (358, 'Jessor', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (359, 'Jhalakati', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (360, 'Jhanaydah', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (361, 'Khagrachhari', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (362, 'Khulna', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (363, 'Kishorganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (364, 'Koks Bazar', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (365, 'Komilla', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (366, 'Kurigram', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (367, 'Kushtiya', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (368, 'Lakshmipur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (369, 'Lalmanir Hat', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (370, 'Madaripur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (371, 'Magura', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (372, 'Maimansingh', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (373, 'Manikganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (374, 'Maulvi Bazar', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (375, 'Meherpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (376, 'Munshiganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (377, 'Naral', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (378, 'Narayanganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (379, 'Narsingdi', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (380, 'Nator', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (381, 'Naugaon', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (382, 'Nawabganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (383, 'Netrakona', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (384, 'Nilphamari', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (385, 'Noakhali', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (386, 'Pabna', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (387, 'Panchagarh', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (388, 'Patuakhali', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (389, 'Pirojpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (390, 'Rajbari', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (391, 'Rajshahi', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (392, 'Rangamati', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (393, 'Rangpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (394, 'Satkhira', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (395, 'Shariatpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (396, 'Sherpur', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (397, 'Silhat', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (398, 'Sirajganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (399, 'Sunamganj', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (400, 'Tangayal', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (401, 'Thakurgaon', 18);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (402, 'Christ Church', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (403, 'Saint Andrew', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (404, 'Saint George', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (405, 'Saint James', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (406, 'Saint John', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (407, 'Saint Joseph', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (408, 'Saint Lucy', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (409, 'Saint Michael', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (410, 'Saint Peter', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (411, 'Saint Philip', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (412, 'Saint Thomas', 19);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (413, 'Brest', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (414, 'Homjel''', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (415, 'Hrodna', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (416, 'Mahiljow', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (417, 'Mahilyowskaya Voblasts', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (418, 'Minsk', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (419, 'Minskaja Voblasts''', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (420, 'Petrik', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (421, 'Vicebsk', 20);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (422, 'Antwerpen', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (423, 'Berchem', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (424, 'Brabant', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (425, 'Brabant Wallon', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (426, 'Brussel', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (427, 'East Flanders', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (428, 'Hainaut', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (429, 'Liege', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (430, 'Limburg', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (431, 'Luxembourg', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (432, 'Namur', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (433, 'Ontario', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (434, 'Oost-Vlaanderen', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (435, 'Provincie Brabant', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (436, 'Vlaams-Brabant', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (437, 'Wallonne', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (438, 'West-Vlaanderen', 21);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (439, 'Belize', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (440, 'Cayo', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (441, 'Corozal', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (442, 'Orange Walk', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (443, 'Stann Creek', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (444, 'Toledo', 22);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (445, 'Alibori', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (446, 'Atacora', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (447, 'Atlantique', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (448, 'Borgou', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (449, 'Collines', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (450, 'Couffo', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (451, 'Donga', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (452, 'Littoral', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (453, 'Mono', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (454, 'Oueme', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (455, 'Plateau', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (456, 'Zou', 23);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (457, 'Hamilton', 24);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (458, 'Saint George', 24);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (459, 'Bumthang', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (460, 'Chhukha', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (461, 'Chirang', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (462, 'Daga', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (463, 'Geylegphug', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (464, 'Ha', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (465, 'Lhuntshi', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (466, 'Mongar', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (467, 'Pemagatsel', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (468, 'Punakha', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (469, 'Rinpung', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (470, 'Samchi', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (471, 'Samdrup Jongkhar', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (472, 'Shemgang', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (473, 'Tashigang', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (474, 'Timphu', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (475, 'Tongsa', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (476, 'Wangdiphodrang', 25);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (477, 'Beni', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (478, 'Chuquisaca', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (479, 'Cochabamba', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (480, 'La Paz', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (481, 'Oruro', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (482, 'Pando', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (483, 'Potosi', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (484, 'Santa Cruz', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (485, 'Tarija', 26);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (486, 'Federacija Bosna i Hercegovina', 27);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (487, 'Republika Srpska', 27);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (488, 'Central Bobonong', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (489, 'Central Boteti', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (490, 'Central Mahalapye', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (491, 'Central Serowe-Palapye', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (492, 'Central Tutume', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (493, 'Chobe', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (494, 'Francistown', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (495, 'Gaborone', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (496, 'Ghanzi', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (497, 'Jwaneng', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (498, 'Kgalagadi North', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (499, 'Kgalagadi South', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (500, 'Kgatleng', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (501, 'Kweneng', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (502, 'Lobatse', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (503, 'Ngamiland', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (504, 'Ngwaketse', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (505, 'North East', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (506, 'Okavango', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (507, 'Orapa', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (508, 'Selibe Phikwe', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (509, 'South East', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (510, 'Sowa', 28);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (511, 'Bouvet Island', 29);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (512, 'Acre', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (513, 'Alagoas', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (514, 'Amapa', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (515, 'Amazonas', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (516, 'Bahia', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (517, 'Ceara', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (518, 'Distrito Federal', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (519, 'Espirito Santo', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (520, 'Estado de Sao Paulo', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (521, 'Goias', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (522, 'Maranhao', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (523, 'Mato Grosso', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (524, 'Mato Grosso do Sul', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (525, 'Minas Gerais', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (526, 'Para', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (527, 'Paraiba', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (528, 'Parana', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (529, 'Pernambuco', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (530, 'Piaui', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (531, 'Rio Grande do Norte', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (532, 'Rio Grande do Sul', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (533, 'Rio de Janeiro', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (534, 'Rondonia', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (535, 'Roraima', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (536, 'Santa Catarina', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (537, 'Sao Paulo', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (538, 'Sergipe', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (539, 'Tocantins', 30);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (540, 'British Indian Ocean Territory', 31);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (541, 'Belait', 32);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (542, 'Brunei-Muara', 32);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (543, 'Temburong', 32);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (544, 'Tutong', 32);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (545, 'Blagoevgrad', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (546, 'Burgas', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (547, 'Dobrich', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (548, 'Gabrovo', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (549, 'Haskovo', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (550, 'Jambol', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (551, 'Kardzhali', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (552, 'Kjustendil', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (553, 'Lovech', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (554, 'Montana', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (555, 'Oblast Sofiya-Grad', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (556, 'Pazardzhik', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (557, 'Pernik', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (558, 'Pleven', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (559, 'Plovdiv', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (560, 'Razgrad', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (561, 'Ruse', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (562, 'Shumen', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (563, 'Silistra', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (564, 'Sliven', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (565, 'Smoljan', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (566, 'Sofija grad', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (567, 'Sofijska oblast', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (568, 'Stara Zagora', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (569, 'Targovishte', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (570, 'Varna', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (571, 'Veliko Tarnovo', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (572, 'Vidin', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (573, 'Vraca', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (574, 'Yablaniza', 33);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (575, 'Bale', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (576, 'Bam', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (577, 'Bazega', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (578, 'Bougouriba', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (579, 'Boulgou', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (580, 'Boulkiemde', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (581, 'Comoe', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (582, 'Ganzourgou', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (583, 'Gnagna', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (584, 'Gourma', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (585, 'Houet', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (586, 'Ioba', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (587, 'Kadiogo', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (588, 'Kenedougou', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (589, 'Komandjari', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (590, 'Kompienga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (591, 'Kossi', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (592, 'Kouritenga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (593, 'Kourweogo', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (594, 'Leraba', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (595, 'Mouhoun', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (596, 'Nahouri', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (597, 'Namentenga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (598, 'Noumbiel', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (599, 'Oubritenga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (600, 'Oudalan', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (601, 'Passore', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (602, 'Poni', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (603, 'Sanguie', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (604, 'Sanmatenga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (605, 'Seno', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (606, 'Sissili', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (607, 'Soum', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (608, 'Sourou', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (609, 'Tapoa', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (610, 'Tuy', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (611, 'Yatenga', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (612, 'Zondoma', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (613, 'Zoundweogo', 34);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (614, 'Bubanza', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (615, 'Bujumbura', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (616, 'Bururi', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (617, 'Cankuzo', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (618, 'Cibitoke', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (619, 'Gitega', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (620, 'Karuzi', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (621, 'Kayanza', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (622, 'Kirundo', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (623, 'Makamba', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (624, 'Muramvya', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (625, 'Muyinga', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (626, 'Ngozi', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (627, 'Rutana', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (628, 'Ruyigi', 35);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (629, 'Banteay Mean Chey', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (630, 'Bat Dambang', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (631, 'Kampong Cham', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (632, 'Kampong Chhnang', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (633, 'Kampong Spoeu', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (634, 'Kampong Thum', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (635, 'Kampot', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (636, 'Kandal', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (637, 'Kaoh Kong', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (638, 'Kracheh', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (639, 'Krong Kaeb', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (640, 'Krong Pailin', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (641, 'Krong Preah Sihanouk', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (642, 'Mondol Kiri', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (643, 'Otdar Mean Chey', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (644, 'Phnum Penh', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (645, 'Pousat', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (646, 'Preah Vihear', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (647, 'Prey Veaeng', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (648, 'Rotanak Kiri', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (649, 'Siem Reab', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (650, 'Stueng Traeng', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (651, 'Svay Rieng', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (652, 'Takaev', 36);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (653, 'Adamaoua', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (654, 'Centre', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (655, 'Est', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (656, 'Littoral', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (657, 'Nord', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (658, 'Nord Extreme', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (659, 'Nordouest', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (660, 'Ouest', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (661, 'Sud', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (662, 'Sudouest', 37);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (663, 'Alberta', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (664, 'British Columbia', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (665, 'Manitoba', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (666, 'New Brunswick', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (667, 'Newfoundland and Labrador', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (668, 'Northwest Territories', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (669, 'Nova Scotia', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (670, 'Nunavut', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (671, 'Ontario', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (672, 'Prince Edward Island', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (673, 'Quebec', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (674, 'Saskatchewan', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (675, 'Yukon', 38);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (676, 'Boavista', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (677, 'Brava', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (678, 'Fogo', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (679, 'Maio', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (680, 'Sal', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (681, 'Santo Antao', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (682, 'Sao Nicolau', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (683, 'Sao Tiago', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (684, 'Sao Vicente', 39);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (685, 'Grand Cayman', 40);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (686, 'Bamingui-Bangoran', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (687, 'Bangui', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (688, 'Basse-Kotto', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (689, 'Haut-Mbomou', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (690, 'Haute-Kotto', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (691, 'Kemo', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (692, 'Lobaye', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (693, 'Mambere-Kadei', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (694, 'Mbomou', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (695, 'Nana-Gribizi', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (696, 'Nana-Mambere', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (697, 'Ombella Mpoko', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (698, 'Ouaka', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (699, 'Ouham', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (700, 'Ouham-Pende', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (701, 'Sangha-Mbaere', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (702, 'Vakaga', 41);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (703, 'Batha', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (704, 'Biltine', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (705, 'Bourkou-Ennedi-Tibesti', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (706, 'Chari-Baguirmi', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (707, 'Guera', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (708, 'Kanem', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (709, 'Lac', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (710, 'Logone Occidental', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (711, 'Logone Oriental', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (712, 'Mayo-Kebbi', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (713, 'Moyen-Chari', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (714, 'Ouaddai', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (715, 'Salamat', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (716, 'Tandjile', 42);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (717, 'Aisen', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (718, 'Antofagasta', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (719, 'Araucania', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (720, 'Atacama', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (721, 'Bio Bio', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (722, 'Coquimbo', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (723, 'Libertador General Bernardo O''', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (724, 'Los Lagos', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (725, 'Magellanes', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (726, 'Maule', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (727, 'Metropolitana', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (728, 'Metropolitana de Santiago', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (729, 'Tarapaca', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (730, 'Valparaiso', 43);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (731, 'Anhui', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (732, 'Anhui Province', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (733, 'Anhui Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (734, 'Aomen', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (735, 'Beijing', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (736, 'Beijing Shi', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (737, 'Chongqing', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (738, 'Fujian', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (739, 'Fujian Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (740, 'Gansu', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (741, 'Guangdong', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (742, 'Guangdong Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (743, 'Guangxi', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (744, 'Guizhou', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (745, 'Hainan', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (746, 'Hebei', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (747, 'Heilongjiang', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (748, 'Henan', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (749, 'Hubei', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (750, 'Hunan', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (751, 'Jiangsu', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (752, 'Jiangsu Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (753, 'Jiangxi', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (754, 'Jilin', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (755, 'Liaoning', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (756, 'Liaoning Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (757, 'Nei Monggol', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (758, 'Ningxia Hui', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (759, 'Qinghai', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (760, 'Shaanxi', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (761, 'Shandong', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (762, 'Shandong Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (763, 'Shanghai', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (764, 'Shanxi', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (765, 'Sichuan', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (766, 'Tianjin', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (767, 'Xianggang', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (768, 'Xinjiang', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (769, 'Xizang', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (770, 'Yunnan', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (771, 'Zhejiang', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (772, 'Zhejiang Sheng', 44);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (773, 'Christmas Island', 45);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (774, 'Cocos (Keeling) Islands', 46);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (775, 'Amazonas', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (776, 'Antioquia', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (777, 'Arauca', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (778, 'Atlantico', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (779, 'Bogota', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (780, 'Bolivar', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (781, 'Boyaca', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (782, 'Caldas', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (783, 'Caqueta', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (784, 'Casanare', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (785, 'Cauca', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (786, 'Cesar', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (787, 'Choco', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (788, 'Cordoba', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (789, 'Cundinamarca', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (790, 'Guainia', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (791, 'Guaviare', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (792, 'Huila', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (793, 'La Guajira', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (794, 'Magdalena', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (795, 'Meta', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (796, 'Narino', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (797, 'Norte de Santander', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (798, 'Putumayo', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (799, 'Quindio', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (800, 'Risaralda', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (801, 'San Andres y Providencia', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (802, 'Santander', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (803, 'Sucre', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (804, 'Tolima', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (805, 'Valle del Cauca', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (806, 'Vaupes', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (807, 'Vichada', 47);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (808, 'Mwali', 48);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (809, 'Njazidja', 48);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (810, 'Nzwani', 48);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (811, 'Bouenza', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (812, 'Brazzaville', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (813, 'Cuvette', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (814, 'Kouilou', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (815, 'Lekoumou', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (816, 'Likouala', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (817, 'Niari', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (818, 'Plateaux', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (819, 'Pool', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (820, 'Sangha', 49);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (821, 'Bandundu', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (822, 'Bas-Congo', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (823, 'Equateur', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (824, 'Haut-Congo', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (825, 'Kasai-Occidental', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (826, 'Kasai-Oriental', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (827, 'Katanga', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (828, 'Kinshasa', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (829, 'Maniema', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (830, 'Nord-Kivu', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (831, 'Sud-Kivu', 50);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (832, 'Aitutaki', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (833, 'Atiu', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (834, 'Mangaia', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (835, 'Manihiki', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (836, 'Mauke', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (837, 'Mitiaro', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (838, 'Nassau', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (839, 'Pukapuka', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (840, 'Rakahanga', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (841, 'Rarotonga', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (842, 'Tongareva', 51);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (843, 'Alajuela', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (844, 'Cartago', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (845, 'Guanacaste', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (846, 'Heredia', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (847, 'Limon', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (848, 'Puntarenas', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (849, 'San Jose', 52);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (850, 'Abidjan', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (851, 'Agneby', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (852, 'Bafing', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (853, 'Denguele', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (854, 'Dix-huit Montagnes', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (855, 'Fromager', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (856, 'Haut-Sassandra', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (857, 'Lacs', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (858, 'Lagunes', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (859, 'Marahoue', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (860, 'Moyen-Cavally', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (861, 'Moyen-Comoe', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (862, 'N''zi-Comoe', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (863, 'Sassandra', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (864, 'Savanes', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (865, 'Sud-Bandama', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (866, 'Sud-Comoe', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (867, 'Vallee du Bandama', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (868, 'Worodougou', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (869, 'Zanzan', 53);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (870, 'Bjelovar-Bilogora', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (871, 'Dubrovnik-Neretva', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (872, 'Grad Zagreb', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (873, 'Istra', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (874, 'Karlovac', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (875, 'Koprivnica-Krizhevci', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (876, 'Krapina-Zagorje', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (877, 'Lika-Senj', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (878, 'Medhimurje', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (879, 'Medimurska Zupanija', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (880, 'Osijek-Baranja', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (881, 'Osjecko-Baranjska Zupanija', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (882, 'Pozhega-Slavonija', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (883, 'Primorje-Gorski Kotar', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (884, 'Shibenik-Knin', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (885, 'Sisak-Moslavina', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (886, 'Slavonski Brod-Posavina', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (887, 'Split-Dalmacija', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (888, 'Varazhdin', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (889, 'Virovitica-Podravina', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (890, 'Vukovar-Srijem', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (891, 'Zadar', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (892, 'Zagreb', 54);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (893, 'Camaguey', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (894, 'Ciego de Avila', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (895, 'Cienfuegos', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (896, 'Ciudad de la Habana', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (897, 'Granma', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (898, 'Guantanamo', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (899, 'Habana', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (900, 'Holguin', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (901, 'Isla de la Juventud', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (902, 'La Habana', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (903, 'Las Tunas', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (904, 'Matanzas', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (905, 'Pinar del Rio', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (906, 'Sancti Spiritus', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (907, 'Santiago de Cuba', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (908, 'Villa Clara', 55);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (909, 'Government controlled area', 56);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (910, 'Limassol', 56);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (911, 'Nicosia District', 56);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (912, 'Paphos', 56);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (913, 'Turkish controlled area', 56);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (914, 'Central Bohemian', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (915, 'Frycovice', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (916, 'Jihocesky Kraj', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (917, 'Jihochesky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (918, 'Jihomoravsky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (919, 'Karlovarsky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (920, 'Klecany', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (921, 'Kralovehradecky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (922, 'Liberecky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (923, 'Lipov', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (924, 'Moravskoslezsky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (925, 'Olomoucky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (926, 'Olomoucky Kraj', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (927, 'Pardubicky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (928, 'Plzensky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (929, 'Praha', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (930, 'Rajhrad', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (931, 'Smirice', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (932, 'South Moravian', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (933, 'Straz nad Nisou', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (934, 'Stredochesky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (935, 'Unicov', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (936, 'Ustecky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (937, 'Valletta', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (938, 'Velesin', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (939, 'Vysochina', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (940, 'Zlinsky', 57);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (941, 'Arhus', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (942, 'Bornholm', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (943, 'Frederiksborg', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (944, 'Fyn', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (945, 'Hovedstaden', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (946, 'Kobenhavn', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (947, 'Kobenhavns Amt', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (948, 'Kobenhavns Kommune', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (949, 'Nordjylland', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (950, 'Ribe', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (951, 'Ringkobing', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (952, 'Roervig', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (953, 'Roskilde', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (954, 'Roslev', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (955, 'Sjaelland', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (956, 'Soeborg', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (957, 'Sonderjylland', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (958, 'Storstrom', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (959, 'Syddanmark', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (960, 'Toelloese', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (961, 'Vejle', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (962, 'Vestsjalland', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (963, 'Viborg', 58);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (964, '''Ali Sabih', 59);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (965, 'Dikhil', 59);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (966, 'Jibuti', 59);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (967, 'Tajurah', 59);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (968, 'Ubuk', 59);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (969, 'Saint Andrew', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (970, 'Saint David', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (971, 'Saint George', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (972, 'Saint John', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (973, 'Saint Joseph', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (974, 'Saint Luke', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (975, 'Saint Mark', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (976, 'Saint Patrick', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (977, 'Saint Paul', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (978, 'Saint Peter', 60);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (979, 'Azua', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (980, 'Bahoruco', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (981, 'Barahona', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (982, 'Dajabon', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (983, 'Distrito Nacional', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (984, 'Duarte', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (985, 'El Seybo', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (986, 'Elias Pina', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (987, 'Espaillat', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (988, 'Hato Mayor', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (989, 'Independencia', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (990, 'La Altagracia', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (991, 'La Romana', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (992, 'La Vega', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (993, 'Maria Trinidad Sanchez', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (994, 'Monsenor Nouel', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (995, 'Monte Cristi', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (996, 'Monte Plata', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (997, 'Pedernales', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (998, 'Peravia', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (999, 'Puerto Plata', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1000, 'Salcedo', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1001, 'Samana', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1002, 'San Cristobal', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1003, 'San Juan', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1004, 'San Pedro de Macoris', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1005, 'Sanchez Ramirez', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1006, 'Santiago', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1007, 'Santiago Rodriguez', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1008, 'Valverde', 61);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1009, 'Aileu', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1010, 'Ainaro', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1011, 'Ambeno', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1012, 'Baucau', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1013, 'Bobonaro', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1014, 'Cova Lima', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1015, 'Dili', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1016, 'Ermera', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1017, 'Lautem', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1018, 'Liquica', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1019, 'Manatuto', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1020, 'Manufahi', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1021, 'Viqueque', 62);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1022, 'Azuay', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1023, 'Bolivar', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1024, 'Canar', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1025, 'Carchi', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1026, 'Chimborazo', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1027, 'Cotopaxi', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1028, 'El Oro', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1029, 'Esmeraldas', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1030, 'Galapagos', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1031, 'Guayas', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1032, 'Imbabura', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1033, 'Loja', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1034, 'Los Rios', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1035, 'Manabi', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1036, 'Morona Santiago', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1037, 'Napo', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1038, 'Orellana', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1039, 'Pastaza', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1040, 'Pichincha', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1041, 'Sucumbios', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1042, 'Tungurahua', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1043, 'Zamora Chinchipe', 63);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1044, 'Aswan', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1045, 'Asyut', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1046, 'Bani Suwayf', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1047, 'Bur Sa''id', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1048, 'Cairo', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1049, 'Dumyat', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1050, 'Kafr-ash-Shaykh', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1051, 'Matruh', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1052, 'Muhafazat ad Daqahliyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1053, 'Muhafazat al Fayyum', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1054, 'Muhafazat al Gharbiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1055, 'Muhafazat al Iskandariyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1056, 'Muhafazat al Qahirah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1057, 'Qina', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1058, 'Sawhaj', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1059, 'Sina al-Janubiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1060, 'Sina ash-Shamaliyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1061, 'ad-Daqahliyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1062, 'al-Bahr-al-Ahmar', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1063, 'al-Buhayrah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1064, 'al-Fayyum', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1065, 'al-Gharbiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1066, 'al-Iskandariyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1067, 'al-Ismailiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1068, 'al-Jizah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1069, 'al-Minufiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1070, 'al-Minya', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1071, 'al-Qahira', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1072, 'al-Qalyubiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1073, 'al-Uqsur', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1074, 'al-Wadi al-Jadid', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1075, 'as-Suways', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1076, 'ash-Sharqiyah', 64);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1077, 'Ahuachapan', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1078, 'Cabanas', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1079, 'Chalatenango', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1080, 'Cuscatlan', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1081, 'La Libertad', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1082, 'La Paz', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1083, 'La Union', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1084, 'Morazan', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1085, 'San Miguel', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1086, 'San Salvador', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1087, 'San Vicente', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1088, 'Santa Ana', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1089, 'Sonsonate', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1090, 'Usulutan', 65);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1091, 'Annobon', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1092, 'Bioko Norte', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1093, 'Bioko Sur', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1094, 'Centro Sur', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1095, 'Kie-Ntem', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1096, 'Litoral', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1097, 'Wele-Nzas', 66);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1098, 'Anseba', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1099, 'Debub', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1100, 'Debub-Keih-Bahri', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1101, 'Gash-Barka', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1102, 'Maekel', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1103, 'Semien-Keih-Bahri', 67);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1104, 'Harju', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1105, 'Hiiu', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1106, 'Ida-Viru', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1107, 'Jarva', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1108, 'Jogeva', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1109, 'Laane', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1110, 'Laane-Viru', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1111, 'Parnu', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1112, 'Polva', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1113, 'Rapla', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1114, 'Saare', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1115, 'Tartu', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1116, 'Valga', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1117, 'Viljandi', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1118, 'Voru', 68);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1119, 'Addis Abeba', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1120, 'Afar', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1121, 'Amhara', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1122, 'Benishangul', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1123, 'Diredawa', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1124, 'Gambella', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1125, 'Harar', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1126, 'Jigjiga', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1127, 'Mekele', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1128, 'Oromia', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1129, 'Somali', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1130, 'Southern', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1131, 'Tigray', 69);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1132, 'Christmas Island', 70);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1133, 'Cocos Islands', 70);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1134, 'Coral Sea Islands', 70);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1135, 'Falkland Islands', 71);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1136, 'South Georgia', 71);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1137, 'Klaksvik', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1138, 'Nor ara Eysturoy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1139, 'Nor oy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1140, 'Sandoy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1141, 'Streymoy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1142, 'Su uroy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1143, 'Sy ra Eysturoy', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1144, 'Torshavn', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1145, 'Vaga', 72);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1146, 'Central', 73);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1147, 'Eastern', 73);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1148, 'Northern', 73);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1149, 'South Pacific', 73);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1150, 'Western', 73);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1151, 'Ahvenanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1152, 'Etela-Karjala', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1153, 'Etela-Pohjanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1154, 'Etela-Savo', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1155, 'Etela-Suomen Laani', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1156, 'Ita-Suomen Laani', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1157, 'Ita-Uusimaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1158, 'Kainuu', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1159, 'Kanta-Hame', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1160, 'Keski-Pohjanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1161, 'Keski-Suomi', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1162, 'Kymenlaakso', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1163, 'Lansi-Suomen Laani', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1164, 'Lappi', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1165, 'Northern Savonia', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1166, 'Ostrobothnia', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1167, 'Oulun Laani', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1168, 'Paijat-Hame', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1169, 'Pirkanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1170, 'Pohjanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1171, 'Pohjois-Karjala', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1172, 'Pohjois-Pohjanmaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1173, 'Pohjois-Savo', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1174, 'Saarijarvi', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1175, 'Satakunta', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1176, 'Southern Savonia', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1177, 'Tavastia Proper', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1178, 'Uleaborgs Lan', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1179, 'Uusimaa', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1180, 'Varsinais-Suomi', 74);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1181, 'Ain', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1182, 'Aisne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1183, 'Albi Le Sequestre', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1184, 'Allier', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1185, 'Alpes-Cote dAzur', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1186, 'Alpes-Maritimes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1187, 'Alpes-de-Haute-Provence', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1188, 'Alsace', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1189, 'Aquitaine', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1190, 'Ardeche', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1191, 'Ardennes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1192, 'Ariege', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1193, 'Aube', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1194, 'Aude', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1195, 'Auvergne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1196, 'Aveyron', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1197, 'Bas-Rhin', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1198, 'Basse-Normandie', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1199, 'Bouches-du-Rhone', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1200, 'Bourgogne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1201, 'Bretagne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1202, 'Brittany', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1203, 'Burgundy', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1204, 'Calvados', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1205, 'Cantal', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1206, 'Cedex', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1207, 'Centre', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1208, 'Charente', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1209, 'Charente-Maritime', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1210, 'Cher', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1211, 'Correze', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1212, 'Corse-du-Sud', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1213, 'Cote-d''Or', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1214, 'Cotes-d''Armor', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1215, 'Creuse', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1216, 'Crolles', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1217, 'Deux-Sevres', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1218, 'Dordogne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1219, 'Doubs', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1220, 'Drome', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1221, 'Essonne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1222, 'Eure', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1223, 'Eure-et-Loir', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1224, 'Feucherolles', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1225, 'Finistere', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1226, 'Franche-Comte', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1227, 'Gard', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1228, 'Gers', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1229, 'Gironde', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1230, 'Haut-Rhin', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1231, 'Haute-Corse', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1232, 'Haute-Garonne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1233, 'Haute-Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1234, 'Haute-Marne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1235, 'Haute-Saone', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1236, 'Haute-Savoie', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1237, 'Haute-Vienne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1238, 'Hautes-Alpes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1239, 'Hautes-Pyrenees', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1240, 'Hauts-de-Seine', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1241, 'Herault', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1242, 'Ile-de-France', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1243, 'Ille-et-Vilaine', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1244, 'Indre', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1245, 'Indre-et-Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1246, 'Isere', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1247, 'Jura', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1248, 'Klagenfurt', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1249, 'Landes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1250, 'Languedoc-Roussillon', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1251, 'Larcay', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1252, 'Le Castellet', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1253, 'Le Creusot', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1254, 'Limousin', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1255, 'Loir-et-Cher', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1256, 'Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1257, 'Loire-Atlantique', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1258, 'Loiret', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1259, 'Lorraine', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1260, 'Lot', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1261, 'Lot-et-Garonne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1262, 'Lower Normandy', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1263, 'Lozere', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1264, 'Maine-et-Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1265, 'Manche', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1266, 'Marne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1267, 'Mayenne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1268, 'Meurthe-et-Moselle', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1269, 'Meuse', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1270, 'Midi-Pyrenees', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1271, 'Morbihan', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1272, 'Moselle', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1273, 'Nievre', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1274, 'Nord', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1275, 'Nord-Pas-de-Calais', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1276, 'Oise', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1277, 'Orne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1278, 'Paris', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1279, 'Pas-de-Calais', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1280, 'Pays de la Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1281, 'Pays-de-la-Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1282, 'Picardy', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1283, 'Puy-de-Dome', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1284, 'Pyrenees-Atlantiques', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1285, 'Pyrenees-Orientales', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1286, 'Quelmes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1287, 'Rhone', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1288, 'Rhone-Alpes', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1289, 'Saint Ouen', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1290, 'Saint Viatre', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1291, 'Saone-et-Loire', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1292, 'Sarthe', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1293, 'Savoie', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1294, 'Seine-Maritime', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1295, 'Seine-Saint-Denis', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1296, 'Seine-et-Marne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1297, 'Somme', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1298, 'Sophia Antipolis', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1299, 'Souvans', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1300, 'Tarn', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1301, 'Tarn-et-Garonne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1302, 'Territoire de Belfort', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1303, 'Treignac', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1304, 'Upper Normandy', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1305, 'Val-d''Oise', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1306, 'Val-de-Marne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1307, 'Var', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1308, 'Vaucluse', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1309, 'Vellise', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1310, 'Vendee', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1311, 'Vienne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1312, 'Vosges', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1313, 'Yonne', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1314, 'Yvelines', 75);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1315, 'Cayenne', 76);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1316, 'Saint-Laurent-du-Maroni', 76);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1317, 'Iles du Vent', 77);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1318, 'Iles sous le Vent', 77);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1319, 'Marquesas', 77);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1320, 'Tuamotu', 77);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1321, 'Tubuai', 77);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1322, 'Amsterdam', 78);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1323, 'Crozet Islands', 78);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1324, 'Kerguelen', 78);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1325, 'Estuaire', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1326, 'Haut-Ogooue', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1327, 'Moyen-Ogooue', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1328, 'Ngounie', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1329, 'Nyanga', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1330, 'Ogooue-Ivindo', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1331, 'Ogooue-Lolo', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1332, 'Ogooue-Maritime', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1333, 'Woleu-Ntem', 79);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1334, 'Banjul', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1335, 'Basse', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1336, 'Brikama', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1337, 'Janjanbureh', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1338, 'Kanifing', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1339, 'Kerewan', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1340, 'Kuntaur', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1341, 'Mansakonko', 80);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1342, 'Abhasia', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1343, 'Ajaria', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1344, 'Guria', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1345, 'Imereti', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1346, 'Kaheti', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1347, 'Kvemo Kartli', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1348, 'Mcheta-Mtianeti', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1349, 'Racha', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1350, 'Samagrelo-Zemo Svaneti', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1351, 'Samche-Zhavaheti', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1352, 'Shida Kartli', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1353, 'Tbilisi', 81);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1354, 'Auvergne', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1355, 'Baden-Wurttemberg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1356, 'Bavaria', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1357, 'Bayern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1358, 'Beilstein Wurtt', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1359, 'Berlin', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1360, 'Brandenburg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1361, 'Bremen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1362, 'Dreisbach', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1363, 'Freistaat Bayern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1364, 'Hamburg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1365, 'Hannover', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1366, 'Heroldstatt', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1367, 'Hessen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1368, 'Kortenberg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1369, 'Laasdorf', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1370, 'Land Baden-Wurttemberg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1371, 'Land Bayern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1372, 'Land Brandenburg', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1373, 'Land Hessen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1374, 'Land Mecklenburg-Vorpommern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1375, 'Land Nordrhein-Westfalen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1376, 'Land Rheinland-Pfalz', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1377, 'Land Sachsen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1378, 'Land Sachsen-Anhalt', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1379, 'Land Thuringen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1380, 'Lower Saxony', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1381, 'Mecklenburg-Vorpommern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1382, 'Mulfingen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1383, 'Munich', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1384, 'Neubeuern', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1385, 'Niedersachsen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1386, 'Noord-Holland', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1387, 'Nordrhein-Westfalen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1388, 'North Rhine-Westphalia', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1389, 'Osterode', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1390, 'Rheinland-Pfalz', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1391, 'Rhineland-Palatinate', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1392, 'Saarland', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1393, 'Sachsen', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1394, 'Sachsen-Anhalt', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1395, 'Saxony', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1396, 'Schleswig-Holstein', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1397, 'Thuringia', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1398, 'Webling', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1399, 'Weinstrabe', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1400, 'schlobborn', 82);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1401, 'Ashanti', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1402, 'Brong-Ahafo', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1403, 'Central', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1404, 'Eastern', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1405, 'Greater Accra', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1406, 'Northern', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1407, 'Upper East', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1408, 'Upper West', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1409, 'Volta', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1410, 'Western', 83);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1411, 'Gibraltar', 84);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1412, 'Acharnes', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1413, 'Ahaia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1414, 'Aitolia kai Akarnania', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1415, 'Argolis', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1416, 'Arkadia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1417, 'Arta', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1418, 'Attica', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1419, 'Attiki', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1420, 'Ayion Oros', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1421, 'Crete', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1422, 'Dodekanisos', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1423, 'Drama', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1424, 'Evia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1425, 'Evritania', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1426, 'Evros', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1427, 'Evvoia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1428, 'Florina', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1429, 'Fokis', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1430, 'Fthiotis', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1431, 'Grevena', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1432, 'Halandri', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1433, 'Halkidiki', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1434, 'Hania', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1435, 'Heraklion', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1436, 'Hios', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1437, 'Ilia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1438, 'Imathia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1439, 'Ioannina', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1440, 'Iraklion', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1441, 'Karditsa', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1442, 'Kastoria', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1443, 'Kavala', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1444, 'Kefallinia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1445, 'Kerkira', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1446, 'Kiklades', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1447, 'Kilkis', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1448, 'Korinthia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1449, 'Kozani', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1450, 'Lakonia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1451, 'Larisa', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1452, 'Lasithi', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1453, 'Lesvos', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1454, 'Levkas', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1455, 'Magnisia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1456, 'Messinia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1457, 'Nomos Attikis', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1458, 'Nomos Zakynthou', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1459, 'Pella', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1460, 'Pieria', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1461, 'Piraios', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1462, 'Preveza', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1463, 'Rethimni', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1464, 'Rodopi', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1465, 'Samos', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1466, 'Serrai', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1467, 'Thesprotia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1468, 'Thessaloniki', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1469, 'Trikala', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1470, 'Voiotia', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1471, 'West Greece', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1472, 'Xanthi', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1473, 'Zakinthos', 85);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1474, 'Aasiaat', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1475, 'Ammassalik', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1476, 'Illoqqortoormiut', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1477, 'Ilulissat', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1478, 'Ivittuut', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1479, 'Kangaatsiaq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1480, 'Maniitsoq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1481, 'Nanortalik', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1482, 'Narsaq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1483, 'Nuuk', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1484, 'Paamiut', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1485, 'Qaanaaq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1486, 'Qaqortoq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1487, 'Qasigiannguit', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1488, 'Qeqertarsuaq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1489, 'Sisimiut', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1490, 'Udenfor kommunal inddeling', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1491, 'Upernavik', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1492, 'Uummannaq', 86);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1493, 'Carriacou-Petite Martinique', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1494, 'Saint Andrew', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1495, 'Saint Davids', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1496, 'Saint George''s', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1497, 'Saint John', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1498, 'Saint Mark', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1499, 'Saint Patrick', 87);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1500, 'Basse-Terre', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1501, 'Grande-Terre', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1502, 'Iles des Saintes', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1503, 'La Desirade', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1504, 'Marie-Galante', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1505, 'Saint Barthelemy', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1506, 'Saint Martin', 88);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1507, 'Agana Heights', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1508, 'Agat', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1509, 'Barrigada', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1510, 'Chalan-Pago-Ordot', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1511, 'Dededo', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1512, 'Hagatna', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1513, 'Inarajan', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1514, 'Mangilao', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1515, 'Merizo', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1516, 'Mongmong-Toto-Maite', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1517, 'Santa Rita', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1518, 'Sinajana', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1519, 'Talofofo', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1520, 'Tamuning', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1521, 'Yigo', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1522, 'Yona', 89);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1523, 'Alta Verapaz', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1524, 'Baja Verapaz', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1525, 'Chimaltenango', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1526, 'Chiquimula', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1527, 'El Progreso', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1528, 'Escuintla', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1529, 'Guatemala', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1530, 'Huehuetenango', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1531, 'Izabal', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1532, 'Jalapa', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1533, 'Jutiapa', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1534, 'Peten', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1535, 'Quezaltenango', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1536, 'Quiche', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1537, 'Retalhuleu', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1538, 'Sacatepequez', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1539, 'San Marcos', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1540, 'Santa Rosa', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1541, 'Solola', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1542, 'Suchitepequez', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1543, 'Totonicapan', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1544, 'Zacapa', 90);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1545, 'Alderney', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1546, 'Castel', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1547, 'Forest', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1548, 'Saint Andrew', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1549, 'Saint Martin', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1550, 'Saint Peter Port', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1551, 'Saint Pierre du Bois', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1552, 'Saint Sampson', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1553, 'Saint Saviour', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1554, 'Sark', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1555, 'Torteval', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1556, 'Vale', 91);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1557, 'Beyla', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1558, 'Boffa', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1559, 'Boke', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1560, 'Conakry', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1561, 'Coyah', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1562, 'Dabola', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1563, 'Dalaba', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1564, 'Dinguiraye', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1565, 'Faranah', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1566, 'Forecariah', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1567, 'Fria', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1568, 'Gaoual', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1569, 'Gueckedou', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1570, 'Kankan', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1571, 'Kerouane', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1572, 'Kindia', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1573, 'Kissidougou', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1574, 'Koubia', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1575, 'Koundara', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1576, 'Kouroussa', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1577, 'Labe', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1578, 'Lola', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1579, 'Macenta', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1580, 'Mali', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1581, 'Mamou', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1582, 'Mandiana', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1583, 'Nzerekore', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1584, 'Pita', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1585, 'Siguiri', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1586, 'Telimele', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1587, 'Tougue', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1588, 'Yomou', 92);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1589, 'Bafata', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1590, 'Bissau', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1591, 'Bolama', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1592, 'Cacheu', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1593, 'Gabu', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1594, 'Oio', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1595, 'Quinara', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1596, 'Tombali', 93);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1597, 'Barima-Waini', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1598, 'Cuyuni-Mazaruni', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1599, 'Demerara-Mahaica', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1600, 'East Berbice-Corentyne', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1601, 'Essequibo Islands-West Demerar', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1602, 'Mahaica-Berbice', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1603, 'Pomeroon-Supenaam', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1604, 'Potaro-Siparuni', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1605, 'Upper Demerara-Berbice', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1606, 'Upper Takutu-Upper Essequibo', 94);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1607, 'Artibonite', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1608, 'Centre', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1609, 'Grand''Anse', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1610, 'Nord', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1611, 'Nord-Est', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1612, 'Nord-Ouest', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1613, 'Ouest', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1614, 'Sud', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1615, 'Sud-Est', 95);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1616, 'Heard and McDonald Islands', 96);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1617, 'Atlantida', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1618, 'Choluteca', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1619, 'Colon', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1620, 'Comayagua', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1621, 'Copan', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1622, 'Cortes', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1623, 'Distrito Central', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1624, 'El Paraiso', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1625, 'Francisco Morazan', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1626, 'Gracias a Dios', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1627, 'Intibuca', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1628, 'Islas de la Bahia', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1629, 'La Paz', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1630, 'Lempira', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1631, 'Ocotepeque', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1632, 'Olancho', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1633, 'Santa Barbara', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1634, 'Valle', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1635, 'Yoro', 97);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1636, 'Hong Kong', 98);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1637, 'Bacs-Kiskun', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1638, 'Baranya', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1639, 'Bekes', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1640, 'Borsod-Abauj-Zemplen', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1641, 'Budapest', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1642, 'Csongrad', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1643, 'Fejer', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1644, 'Gyor-Moson-Sopron', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1645, 'Hajdu-Bihar', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1646, 'Heves', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1647, 'Jasz-Nagykun-Szolnok', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1648, 'Komarom-Esztergom', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1649, 'Nograd', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1650, 'Pest', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1651, 'Somogy', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1652, 'Szabolcs-Szatmar-Bereg', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1653, 'Tolna', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1654, 'Vas', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1655, 'Veszprem', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1656, 'Zala', 99);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1657, 'Austurland', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1658, 'Gullbringusysla', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1659, 'Hofu borgarsva i', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1660, 'Nor urland eystra', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1661, 'Nor urland vestra', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1662, 'Su urland', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1663, 'Su urnes', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1664, 'Vestfir ir', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1665, 'Vesturland', 100);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1666, 'Aceh', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1667, 'Bali', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1668, 'Bangka-Belitung', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1669, 'Banten', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1670, 'Bengkulu', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1671, 'Gandaria', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1672, 'Gorontalo', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1673, 'Jakarta', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1674, 'Jambi', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1675, 'Jawa Barat', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1676, 'Jawa Tengah', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1677, 'Jawa Timur', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1678, 'Kalimantan Barat', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1679, 'Kalimantan Selatan', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1680, 'Kalimantan Tengah', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1681, 'Kalimantan Timur', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1682, 'Kendal', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1683, 'Lampung', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1684, 'Maluku', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1685, 'Maluku Utara', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1686, 'Nusa Tenggara Barat', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1687, 'Nusa Tenggara Timur', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1688, 'Papua', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1689, 'Riau', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1690, 'Riau Kepulauan', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1691, 'Solo', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1692, 'Sulawesi Selatan', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1693, 'Sulawesi Tengah', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1694, 'Sulawesi Tenggara', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1695, 'Sulawesi Utara', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1696, 'Sumatera Barat', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1697, 'Sumatera Selatan', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1698, 'Sumatera Utara', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1699, 'Yogyakarta', 102);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1700, 'Ardabil', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1701, 'Azarbayjan-e Bakhtari', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1702, 'Azarbayjan-e Khavari', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1703, 'Bushehr', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1704, 'Chahar Mahal-e Bakhtiari', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1705, 'Esfahan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1706, 'Fars', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1707, 'Gilan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1708, 'Golestan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1709, 'Hamadan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1710, 'Hormozgan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1711, 'Ilam', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1712, 'Kerman', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1713, 'Kermanshah', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1714, 'Khorasan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1715, 'Khuzestan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1716, 'Kohgiluyeh-e Boyerahmad', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1717, 'Kordestan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1718, 'Lorestan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1719, 'Markazi', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1720, 'Mazandaran', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1721, 'Ostan-e Esfahan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1722, 'Qazvin', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1723, 'Qom', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1724, 'Semnan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1725, 'Sistan-e Baluchestan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1726, 'Tehran', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1727, 'Yazd', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1728, 'Zanjan', 103);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1729, 'Babil', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1730, 'Baghdad', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1731, 'Dahuk', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1732, 'Dhi Qar', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1733, 'Diyala', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1734, 'Erbil', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1735, 'Irbil', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1736, 'Karbala', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1737, 'Kurdistan', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1738, 'Maysan', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1739, 'Ninawa', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1740, 'Salah-ad-Din', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1741, 'Wasit', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1742, 'al-Anbar', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1743, 'al-Basrah', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1744, 'al-Muthanna', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1745, 'al-Qadisiyah', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1746, 'an-Najaf', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1747, 'as-Sulaymaniyah', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1748, 'at-Ta''mim', 104);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1749, 'Armagh', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1750, 'Carlow', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1751, 'Cavan', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1752, 'Clare', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1753, 'Cork', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1754, 'Donegal', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1755, 'Dublin', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1756, 'Galway', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1757, 'Kerry', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1758, 'Kildare', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1759, 'Kilkenny', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1760, 'Laois', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1761, 'Leinster', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1762, 'Leitrim', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1763, 'Limerick', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1764, 'Loch Garman', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1765, 'Longford', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1766, 'Louth', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1767, 'Mayo', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1768, 'Meath', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1769, 'Monaghan', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1770, 'Offaly', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1771, 'Roscommon', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1772, 'Sligo', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1773, 'Tipperary North Riding', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1774, 'Tipperary South Riding', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1775, 'Ulster', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1776, 'Waterford', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1777, 'Westmeath', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1778, 'Wexford', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1779, 'Wicklow', 105);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1780, 'Beit Hanania', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1781, 'Ben Gurion Airport', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1782, 'Bethlehem', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1783, 'Caesarea', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1784, 'Centre', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1785, 'Gaza', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1786, 'Hadaron', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1787, 'Haifa District', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1788, 'Hamerkaz', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1789, 'Hazafon', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1790, 'Hebron', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1791, 'Jaffa', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1792, 'Jerusalem', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1793, 'Khefa', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1794, 'Kiryat Yam', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1795, 'Lower Galilee', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1796, 'Qalqilya', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1797, 'Talme Elazar', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1798, 'Tel Aviv', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1799, 'Tsafon', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1800, 'Umm El Fahem', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1801, 'Yerushalayim', 106);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1802, 'Abruzzi', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1803, 'Abruzzo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1804, 'Agrigento', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1805, 'Alessandria', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1806, 'Ancona', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1807, 'Arezzo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1808, 'Ascoli Piceno', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1809, 'Asti', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1810, 'Avellino', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1811, 'Bari', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1812, 'Basilicata', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1813, 'Belluno', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1814, 'Benevento', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1815, 'Bergamo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1816, 'Biella', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1817, 'Bologna', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1818, 'Bolzano', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1819, 'Brescia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1820, 'Brindisi', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1821, 'Calabria', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1822, 'Campania', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1823, 'Cartoceto', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1824, 'Caserta', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1825, 'Catania', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1826, 'Chieti', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1827, 'Como', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1828, 'Cosenza', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1829, 'Cremona', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1830, 'Cuneo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1831, 'Emilia-Romagna', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1832, 'Ferrara', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1833, 'Firenze', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1834, 'Florence', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1835, 'Forli-Cesena ', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1836, 'Friuli-Venezia Giulia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1837, 'Frosinone', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1838, 'Genoa', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1839, 'Gorizia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1840, 'L''Aquila', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1841, 'Lazio', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1842, 'Lecce', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1843, 'Lecco', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1844, 'Lecco Province', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1845, 'Liguria', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1846, 'Lodi', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1847, 'Lombardia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1848, 'Lombardy', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1849, 'Macerata', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1850, 'Mantova', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1851, 'Marche', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1852, 'Messina', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1853, 'Milan', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1854, 'Modena', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1855, 'Molise', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1856, 'Molteno', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1857, 'Montenegro', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1858, 'Monza and Brianza', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1859, 'Naples', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1860, 'Novara', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1861, 'Padova', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1862, 'Parma', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1863, 'Pavia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1864, 'Perugia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1865, 'Pesaro-Urbino', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1866, 'Piacenza', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1867, 'Piedmont', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1868, 'Piemonte', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1869, 'Pisa', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1870, 'Pordenone', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1871, 'Potenza', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1872, 'Puglia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1873, 'Reggio Emilia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1874, 'Rimini', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1875, 'Roma', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1876, 'Salerno', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1877, 'Sardegna', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1878, 'Sassari', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1879, 'Savona', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1880, 'Sicilia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1881, 'Siena', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1882, 'Sondrio', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1883, 'South Tyrol', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1884, 'Taranto', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1885, 'Teramo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1886, 'Torino', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1887, 'Toscana', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1888, 'Trapani', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1889, 'Trentino-Alto Adige', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1890, 'Trento', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1891, 'Treviso', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1892, 'Udine', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1893, 'Umbria', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1894, 'Valle d''Aosta', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1895, 'Varese', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1896, 'Veneto', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1897, 'Venezia', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1898, 'Verbano-Cusio-Ossola', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1899, 'Vercelli', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1900, 'Verona', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1901, 'Vicenza', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1902, 'Viterbo', 107);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1903, 'Buxoro Viloyati', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1904, 'Clarendon', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1905, 'Hanover', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1906, 'Kingston', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1907, 'Manchester', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1908, 'Portland', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1909, 'Saint Andrews', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1910, 'Saint Ann', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1911, 'Saint Catherine', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1912, 'Saint Elizabeth', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1913, 'Saint James', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1914, 'Saint Mary', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1915, 'Saint Thomas', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1916, 'Trelawney', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1917, 'Westmoreland', 108);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1918, 'Aichi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1919, 'Akita', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1920, 'Aomori', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1921, 'Chiba', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1922, 'Ehime', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1923, 'Fukui', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1924, 'Fukuoka', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1925, 'Fukushima', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1926, 'Gifu', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1927, 'Gumma', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1928, 'Hiroshima', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1929, 'Hokkaido', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1930, 'Hyogo', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1931, 'Ibaraki', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1932, 'Ishikawa', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1933, 'Iwate', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1934, 'Kagawa', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1935, 'Kagoshima', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1936, 'Kanagawa', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1937, 'Kanto', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1938, 'Kochi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1939, 'Kumamoto', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1940, 'Kyoto', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1941, 'Mie', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1942, 'Miyagi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1943, 'Miyazaki', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1944, 'Nagano', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1945, 'Nagasaki', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1946, 'Nara', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1947, 'Niigata', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1948, 'Oita', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1949, 'Okayama', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1950, 'Okinawa', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1951, 'Osaka', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1952, 'Saga', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1953, 'Saitama', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1954, 'Shiga', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1955, 'Shimane', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1956, 'Shizuoka', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1957, 'Tochigi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1958, 'Tokushima', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1959, 'Tokyo', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1960, 'Tottori', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1961, 'Toyama', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1962, 'Wakayama', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1963, 'Yamagata', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1964, 'Yamaguchi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1965, 'Yamanashi', 109);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1966, 'Grouville', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1967, 'Saint Brelade', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1968, 'Saint Clement', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1969, 'Saint Helier', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1970, 'Saint John', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1971, 'Saint Lawrence', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1972, 'Saint Martin', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1973, 'Saint Mary', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1974, 'Saint Peter', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1975, 'Saint Saviour', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1976, 'Trinity', 110);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1977, '''Ajlun', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1978, 'Amman', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1979, 'Irbid', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1980, 'Jarash', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1981, 'Ma''an', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1982, 'Madaba', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1983, 'al-''Aqabah', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1984, 'al-Balqa''', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1985, 'al-Karak', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1986, 'al-Mafraq', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1987, 'at-Tafilah', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1988, 'az-Zarqa''', 111);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1989, 'Akmecet', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1990, 'Akmola', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1991, 'Aktobe', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1992, 'Almati', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1993, 'Atirau', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1994, 'Batis Kazakstan', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1995, 'Burlinsky Region', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1996, 'Karagandi', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1997, 'Kostanay', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1998, 'Mankistau', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (1999, 'Ontustik Kazakstan', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2000, 'Pavlodar', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2001, 'Sigis Kazakstan', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2002, 'Soltustik Kazakstan', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2003, 'Taraz', 112);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2004, 'Central', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2005, 'Coast', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2006, 'Eastern', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2007, 'Nairobi', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2008, 'North Eastern', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2009, 'Nyanza', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2010, 'Rift Valley', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2011, 'Western', 113);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2012, 'Abaiang', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2013, 'Abemana', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2014, 'Aranuka', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2015, 'Arorae', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2016, 'Banaba', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2017, 'Beru', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2018, 'Butaritari', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2019, 'Kiritimati', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2020, 'Kuria', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2021, 'Maiana', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2022, 'Makin', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2023, 'Marakei', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2024, 'Nikunau', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2025, 'Nonouti', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2026, 'Onotoa', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2027, 'Phoenix Islands', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2028, 'Tabiteuea North', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2029, 'Tabiteuea South', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2030, 'Tabuaeran', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2031, 'Tamana', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2032, 'Tarawa North', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2033, 'Tarawa South', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2034, 'Teraina', 114);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2035, 'Chagangdo', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2036, 'Hamgyeongbukto', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2037, 'Hamgyeongnamdo', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2038, 'Hwanghaebukto', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2039, 'Hwanghaenamdo', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2040, 'Kaeseong', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2041, 'Kangweon', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2042, 'Nampo', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2043, 'Pyeonganbukto', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2044, 'Pyeongannamdo', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2045, 'Pyeongyang', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2046, 'Yanggang', 115);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2047, 'Busan', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2048, 'Cheju', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2049, 'Chollabuk', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2050, 'Chollanam', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2051, 'Chungbuk', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2052, 'Chungcheongbuk', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2053, 'Chungcheongnam', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2054, 'Chungnam', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2055, 'Daegu', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2056, 'Gangwon-do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2057, 'Goyang-si', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2058, 'Gyeonggi-do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2059, 'Gyeongsang ', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2060, 'Gyeongsangnam-do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2061, 'Incheon', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2062, 'Jeju-Si', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2063, 'Jeonbuk', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2064, 'Kangweon', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2065, 'Kwangju', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2066, 'Kyeonggi', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2067, 'Kyeongsangbuk', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2068, 'Kyeongsangnam', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2069, 'Kyonggi-do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2070, 'Kyungbuk-Do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2071, 'Kyunggi-Do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2072, 'Kyunggi-do', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2073, 'Pusan', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2074, 'Seoul', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2075, 'Sudogwon', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2076, 'Taegu', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2077, 'Taejeon', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2078, 'Taejon-gwangyoksi', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2079, 'Ulsan', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2080, 'Wonju', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2081, 'gwangyoksi', 116);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2082, 'Al Asimah', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2083, 'Hawalli', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2084, 'Mishref', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2085, 'Qadesiya', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2086, 'Safat', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2087, 'Salmiya', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2088, 'al-Ahmadi', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2089, 'al-Farwaniyah', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2090, 'al-Jahra', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2091, 'al-Kuwayt', 117);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2092, 'Batken', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2093, 'Bishkek', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2094, 'Chui', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2095, 'Issyk-Kul', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2096, 'Jalal-Abad', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2097, 'Naryn', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2098, 'Osh', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2099, 'Talas', 118);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2100, 'Attopu', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2101, 'Bokeo', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2102, 'Bolikhamsay', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2103, 'Champasak', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2104, 'Houaphanh', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2105, 'Khammouane', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2106, 'Luang Nam Tha', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2107, 'Luang Prabang', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2108, 'Oudomxay', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2109, 'Phongsaly', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2110, 'Saravan', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2111, 'Savannakhet', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2112, 'Sekong', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2113, 'Viangchan Prefecture', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2114, 'Viangchan Province', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2115, 'Xaignabury', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2116, 'Xiang Khuang', 119);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2117, 'Aizkraukles', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2118, 'Aluksnes', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2119, 'Balvu', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2120, 'Bauskas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2121, 'Cesu', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2122, 'Daugavpils', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2123, 'Daugavpils City', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2124, 'Dobeles', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2125, 'Gulbenes', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2126, 'Jekabspils', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2127, 'Jelgava', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2128, 'Jelgavas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2129, 'Jurmala City', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2130, 'Kraslavas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2131, 'Kuldigas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2132, 'Liepaja', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2133, 'Liepajas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2134, 'Limbazhu', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2135, 'Ludzas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2136, 'Madonas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2137, 'Ogres', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2138, 'Preilu', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2139, 'Rezekne', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2140, 'Rezeknes', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2141, 'Riga', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2142, 'Rigas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2143, 'Saldus', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2144, 'Talsu', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2145, 'Tukuma', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2146, 'Valkas', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2147, 'Valmieras', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2148, 'Ventspils', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2149, 'Ventspils City', 120);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2150, 'Beirut', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2151, 'Jabal Lubnan', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2152, 'Mohafazat Liban-Nord', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2153, 'Mohafazat Mont-Liban', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2154, 'Sidon', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2155, 'al-Biqa', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2156, 'al-Janub', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2157, 'an-Nabatiyah', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2158, 'ash-Shamal', 121);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2159, 'Berea', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2160, 'Butha-Buthe', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2161, 'Leribe', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2162, 'Mafeteng', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2163, 'Maseru', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2164, 'Mohale''s Hoek', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2165, 'Mokhotlong', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2166, 'Qacha''s Nek', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2167, 'Quthing', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2168, 'Thaba-Tseka', 122);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2169, 'Bomi', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2170, 'Bong', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2171, 'Grand Bassa', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2172, 'Grand Cape Mount', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2173, 'Grand Gedeh', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2174, 'Loffa', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2175, 'Margibi', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2176, 'Maryland and Grand Kru', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2177, 'Montserrado', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2178, 'Nimba', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2179, 'Rivercess', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2180, 'Sinoe', 123);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2181, 'Ajdabiya', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2182, 'Fezzan', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2183, 'Banghazi', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2184, 'Darnah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2185, 'Ghadamis', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2186, 'Gharyan', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2187, 'Misratah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2188, 'Murzuq', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2189, 'Sabha', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2190, 'Sawfajjin', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2191, 'Surt', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2192, 'Tarabulus', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2193, 'Tarhunah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2194, 'Tripolitania', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2195, 'Tubruq', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2196, 'Yafran', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2197, 'Zlitan', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2198, 'al-''Aziziyah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2199, 'al-Fatih', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2200, 'al-Jabal al Akhdar', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2201, 'al-Jufrah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2202, 'al-Khums', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2203, 'al-Kufrah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2204, 'an-Nuqat al-Khams', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2205, 'ash-Shati''', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2206, 'az-Zawiyah', 124);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2207, 'Balzers', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2208, 'Eschen', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2209, 'Gamprin', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2210, 'Mauren', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2211, 'Planken', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2212, 'Ruggell', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2213, 'Schaan', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2214, 'Schellenberg', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2215, 'Triesen', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2216, 'Triesenberg', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2217, 'Vaduz', 125);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2218, 'Alytaus', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2219, 'Anyksciai', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2220, 'Kauno', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2221, 'Klaipedos', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2222, 'Marijampoles', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2223, 'Panevezhio', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2224, 'Panevezys', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2225, 'Shiauliu', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2226, 'Taurages', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2227, 'Telshiu', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2228, 'Telsiai', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2229, 'Utenos', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2230, 'Vilniaus', 126);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2231, 'Capellen', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2232, 'Clervaux', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2233, 'Diekirch', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2234, 'Echternach', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2235, 'Esch-sur-Alzette', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2236, 'Grevenmacher', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2237, 'Luxembourg', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2238, 'Mersch', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2239, 'Redange', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2240, 'Remich', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2241, 'Vianden', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2242, 'Wiltz', 127);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2243, 'Macau', 128);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2244, 'Berovo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2245, 'Bitola', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2246, 'Brod', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2247, 'Debar', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2248, 'Delchevo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2249, 'Demir Hisar', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2250, 'Gevgelija', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2251, 'Gostivar', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2252, 'Kavadarci', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2253, 'Kichevo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2254, 'Kochani', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2255, 'Kratovo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2256, 'Kriva Palanka', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2257, 'Krushevo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2258, 'Kumanovo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2259, 'Negotino', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2260, 'Ohrid', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2261, 'Prilep', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2262, 'Probishtip', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2263, 'Radovish', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2264, 'Resen', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2265, 'Shtip', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2266, 'Skopje', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2267, 'Struga', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2268, 'Strumica', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2269, 'Sveti Nikole', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2270, 'Tetovo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2271, 'Valandovo', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2272, 'Veles', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2273, 'Vinica', 129);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2274, 'Antananarivo', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2275, 'Antsiranana', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2276, 'Fianarantsoa', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2277, 'Mahajanga', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2278, 'Toamasina', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2279, 'Toliary', 130);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2280, 'Balaka', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2281, 'Blantyre City', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2282, 'Chikwawa', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2283, 'Chiradzulu', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2284, 'Chitipa', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2285, 'Dedza', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2286, 'Dowa', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2287, 'Karonga', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2288, 'Kasungu', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2289, 'Lilongwe City', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2290, 'Machinga', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2291, 'Mangochi', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2292, 'Mchinji', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2293, 'Mulanje', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2294, 'Mwanza', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2295, 'Mzimba', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2296, 'Mzuzu City', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2297, 'Nkhata Bay', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2298, 'Nkhotakota', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2299, 'Nsanje', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2300, 'Ntcheu', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2301, 'Ntchisi', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2302, 'Phalombe', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2303, 'Rumphi', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2304, 'Salima', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2305, 'Thyolo', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2306, 'Zomba Municipality', 131);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2307, 'Johor', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2308, 'Kedah', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2309, 'Kelantan', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2310, 'Kuala Lumpur', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2311, 'Labuan', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2312, 'Melaka', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2313, 'Negeri Johor', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2314, 'Negeri Sembilan', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2315, 'Pahang', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2316, 'Penang', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2317, 'Perak', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2318, 'Perlis', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2319, 'Pulau Pinang', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2320, 'Sabah', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2321, 'Sarawak', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2322, 'Selangor', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2323, 'Sembilan', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2324, 'Terengganu', 132);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2325, 'Alif Alif', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2326, 'Alif Dhaal', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2327, 'Baa', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2328, 'Dhaal', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2329, 'Faaf', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2330, 'Gaaf Alif', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2331, 'Gaaf Dhaal', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2332, 'Ghaviyani', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2333, 'Haa Alif', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2334, 'Haa Dhaal', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2335, 'Kaaf', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2336, 'Laam', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2337, 'Lhaviyani', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2338, 'Male', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2339, 'Miim', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2340, 'Nuun', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2341, 'Raa', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2342, 'Shaviyani', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2343, 'Siin', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2344, 'Thaa', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2345, 'Vaav', 133);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2346, 'Bamako', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2347, 'Gao', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2348, 'Kayes', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2349, 'Kidal', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2350, 'Koulikoro', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2351, 'Mopti', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2352, 'Segou', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2353, 'Sikasso', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2354, 'Tombouctou', 134);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2355, 'Gozo and Comino', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2356, 'Inner Harbour', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2357, 'Northern', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2358, 'Outer Harbour', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2359, 'South Eastern', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2360, 'Valletta', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2361, 'Western', 135);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2362, 'Castletown', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2363, 'Douglas', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2364, 'Laxey', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2365, 'Onchan', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2366, 'Peel', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2367, 'Port Erin', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2368, 'Port Saint Mary', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2369, 'Ramsey', 136);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2370, 'Ailinlaplap', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2371, 'Ailuk', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2372, 'Arno', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2373, 'Aur', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2374, 'Bikini', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2375, 'Ebon', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2376, 'Enewetak', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2377, 'Jabat', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2378, 'Jaluit', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2379, 'Kili', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2380, 'Kwajalein', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2381, 'Lae', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2382, 'Lib', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2383, 'Likiep', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2384, 'Majuro', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2385, 'Maloelap', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2386, 'Mejit', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2387, 'Mili', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2388, 'Namorik', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2389, 'Namu', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2390, 'Rongelap', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2391, 'Ujae', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2392, 'Utrik', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2393, 'Wotho', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2394, 'Wotje', 137);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2395, 'Fort-de-France', 138);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2396, 'La Trinite', 138);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2397, 'Le Marin', 138);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2398, 'Saint-Pierre', 138);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2399, 'Adrar', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2400, 'Assaba', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2401, 'Brakna', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2402, 'Dhakhlat Nawadibu', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2403, 'Hudh-al-Gharbi', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2404, 'Hudh-ash-Sharqi', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2405, 'Inshiri', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2406, 'Nawakshut', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2407, 'Qidimagha', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2408, 'Qurqul', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2409, 'Taqant', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2410, 'Tiris Zammur', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2411, 'Trarza', 139);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2412, 'Black River', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2413, 'Eau Coulee', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2414, 'Flacq', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2415, 'Floreal', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2416, 'Grand Port', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2417, 'Moka', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2418, 'Pamplempousses', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2419, 'Plaines Wilhelm', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2420, 'Port Louis', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2421, 'Riviere du Rempart', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2422, 'Rodrigues', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2423, 'Rose Hill', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2424, 'Savanne', 140);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2425, 'Mayotte', 141);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2426, 'Pamanzi', 141);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2427, 'Aguascalientes', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2428, 'Baja California', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2429, 'Baja California Sur', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2430, 'Campeche', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2431, 'Chiapas', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2432, 'Chihuahua', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2433, 'Coahuila', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2434, 'Colima', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2435, 'Distrito Federal', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2436, 'Durango', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2437, 'Estado de Mexico', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2438, 'Guanajuato', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2439, 'Guerrero', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2440, 'Hidalgo', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2441, 'Jalisco', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2442, 'Mexico', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2443, 'Michoacan', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2444, 'Morelos', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2445, 'Nayarit', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2446, 'Nuevo Leon', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2447, 'Oaxaca', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2448, 'Puebla', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2449, 'Queretaro', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2450, 'Quintana Roo', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2451, 'San Luis Potosi', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2452, 'Sinaloa', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2453, 'Sonora', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2454, 'Tabasco', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2455, 'Tamaulipas', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2456, 'Tlaxcala', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2457, 'Veracruz', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2458, 'Yucatan', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2459, 'Zacatecas', 142);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2460, 'Chuuk', 143);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2461, 'Kusaie', 143);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2462, 'Pohnpei', 143);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2463, 'Yap', 143);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2464, 'Balti', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2465, 'Cahul', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2466, 'Chisinau', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2467, 'Chisinau Oras', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2468, 'Edinet', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2469, 'Gagauzia', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2470, 'Lapusna', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2471, 'Orhei', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2472, 'Soroca', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2473, 'Taraclia', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2474, 'Tighina', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2475, 'Transnistria', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2476, 'Ungheni', 144);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2477, 'Fontvieille', 145);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2478, 'La Condamine', 145);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2479, 'Monaco-Ville', 145);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2480, 'Monte Carlo', 145);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2481, 'Arhangaj', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2482, 'Bajan-Olgij', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2483, 'Bajanhongor', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2484, 'Bulgan', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2485, 'Darhan-Uul', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2486, 'Dornod', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2487, 'Dornogovi', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2488, 'Dundgovi', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2489, 'Govi-Altaj', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2490, 'Govisumber', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2491, 'Hentij', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2492, 'Hovd', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2493, 'Hovsgol', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2494, 'Omnogovi', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2495, 'Orhon', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2496, 'Ovorhangaj', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2497, 'Selenge', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2498, 'Suhbaatar', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2499, 'Tov', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2500, 'Ulaanbaatar', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2501, 'Uvs', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2502, 'Zavhan', 146);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2503, 'Montserrat', 147);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2504, 'Agadir', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2505, 'Casablanca', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2506, 'Chaouia-Ouardigha', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2507, 'Doukkala-Abda', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2508, 'Fes-Boulemane', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2509, 'Gharb-Chrarda-Beni Hssen', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2510, 'Guelmim', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2511, 'Kenitra', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2512, 'Marrakech-Tensift-Al Haouz', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2513, 'Meknes-Tafilalet', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2514, 'Oriental', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2515, 'Oujda', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2516, 'Province de Tanger', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2517, 'Rabat-Sale-Zammour-Zaer', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2518, 'Sala Al Jadida', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2519, 'Settat', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2520, 'Souss Massa-Draa', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2521, 'Tadla-Azilal', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2522, 'Tangier-Tetouan', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2523, 'Taza-Al Hoceima-Taounate', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2524, 'Wilaya de Casablanca', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2525, 'Wilaya de Rabat-Sale', 148);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2526, 'Cabo Delgado', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2527, 'Gaza', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2528, 'Inhambane', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2529, 'Manica', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2530, 'Maputo', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2531, 'Maputo Provincia', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2532, 'Nampula', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2533, 'Niassa', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2534, 'Sofala', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2535, 'Tete', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2536, 'Zambezia', 149);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2537, 'Ayeyarwady', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2538, 'Bago', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2539, 'Chin', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2540, 'Kachin', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2541, 'Kayah', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2542, 'Kayin', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2543, 'Magway', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2544, 'Mandalay', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2545, 'Mon', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2546, 'Nay Pyi Taw', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2547, 'Rakhine', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2548, 'Sagaing', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2549, 'Shan', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2550, 'Tanintharyi', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2551, 'Yangon', 150);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2552, 'Caprivi', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2553, 'Erongo', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2554, 'Hardap', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2555, 'Karas', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2556, 'Kavango', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2557, 'Khomas', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2558, 'Kunene', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2559, 'Ohangwena', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2560, 'Omaheke', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2561, 'Omusati', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2562, 'Oshana', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2563, 'Oshikoto', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2564, 'Otjozondjupa', 151);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2565, 'Yaren', 152);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2566, 'Bagmati', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2567, 'Bheri', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2568, 'Dhawalagiri', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2569, 'Gandaki', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2570, 'Janakpur', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2571, 'Karnali', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2572, 'Koshi', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2573, 'Lumbini', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2574, 'Mahakali', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2575, 'Mechi', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2576, 'Narayani', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2577, 'Rapti', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2578, 'Sagarmatha', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2579, 'Seti', 153);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2580, 'Bonaire', 154);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2581, 'Curacao', 154);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2582, 'Saba', 154);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2583, 'Sint Eustatius', 154);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2584, 'Sint Maarten', 154);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2585, 'Amsterdam', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2586, 'Benelux', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2587, 'Drenthe', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2588, 'Flevoland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2589, 'Friesland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2590, 'Gelderland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2591, 'Groningen', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2592, 'Limburg', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2593, 'Noord-Brabant', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2594, 'Noord-Holland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2595, 'Overijssel', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2596, 'South Holland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2597, 'Utrecht', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2598, 'Zeeland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2599, 'Zuid-Holland', 155);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2600, 'Iles', 156);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2601, 'Nord', 156);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2602, 'Sud', 156);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2603, 'Area Outside Region', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2604, 'Auckland', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2605, 'Bay of Plenty', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2606, 'Canterbury', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2607, 'Christchurch', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2608, 'Gisborne', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2609, 'Hawke''s Bay', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2610, 'Manawatu-Wanganui', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2611, 'Marlborough', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2612, 'Nelson', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2613, 'Northland', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2614, 'Otago', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2615, 'Rodney', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2616, 'Southland', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2617, 'Taranaki', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2618, 'Tasman', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2619, 'Waikato', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2620, 'Wellington', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2621, 'West Coast', 157);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2622, 'Atlantico Norte', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2623, 'Atlantico Sur', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2624, 'Boaco', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2625, 'Carazo', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2626, 'Chinandega', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2627, 'Chontales', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2628, 'Esteli', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2629, 'Granada', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2630, 'Jinotega', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2631, 'Leon', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2632, 'Madriz', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2633, 'Managua', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2634, 'Masaya', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2635, 'Matagalpa', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2636, 'Nueva Segovia', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2637, 'Rio San Juan', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2638, 'Rivas', 158);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2639, 'Agadez', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2640, 'Diffa', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2641, 'Dosso', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2642, 'Maradi', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2643, 'Niamey', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2644, 'Tahoua', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2645, 'Tillabery', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2646, 'Zinder', 159);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2647, 'Abia', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2648, 'Abuja Federal Capital Territor', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2649, 'Adamawa', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2650, 'Akwa Ibom', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2651, 'Anambra', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2652, 'Bauchi', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2653, 'Bayelsa', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2654, 'Benue', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2655, 'Borno', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2656, 'Cross River', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2657, 'Delta', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2658, 'Ebonyi', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2659, 'Edo', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2660, 'Ekiti', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2661, 'Enugu', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2662, 'Gombe', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2663, 'Imo', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2664, 'Jigawa', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2665, 'Kaduna', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2666, 'Kano', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2667, 'Katsina', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2668, 'Kebbi', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2669, 'Kogi', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2670, 'Kwara', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2671, 'Lagos', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2672, 'Nassarawa', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2673, 'Niger', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2674, 'Ogun', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2675, 'Ondo', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2676, 'Osun', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2677, 'Oyo', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2678, 'Plateau', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2679, 'Rivers', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2680, 'Sokoto', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2681, 'Taraba', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2682, 'Yobe', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2683, 'Zamfara', 160);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2684, 'Niue', 161);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2685, 'Norfolk Island', 162);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2686, 'Northern Islands', 163);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2687, 'Rota', 163);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2688, 'Saipan', 163);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2689, 'Tinian', 163);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2690, 'Akershus', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2691, 'Aust Agder', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2692, 'Bergen', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2693, 'Buskerud', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2694, 'Finnmark', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2695, 'Hedmark', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2696, 'Hordaland', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2697, 'Moere og Romsdal', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2698, 'Nord Trondelag', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2699, 'Nordland', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2700, 'Oestfold', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2701, 'Oppland', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2702, 'Oslo', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2703, 'Rogaland', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2704, 'Soer Troendelag', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2705, 'Sogn og Fjordane', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2706, 'Stavern', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2707, 'Sykkylven', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2708, 'Telemark', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2709, 'Troms', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2710, 'Vest Agder', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2711, 'Vestfold', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2712, 'ÃƒÂ˜stfold', 164);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2713, 'Al Buraimi', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2714, 'Dhufar', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2715, 'Masqat', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2716, 'Musandam', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2717, 'Rusayl', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2718, 'Wadi Kabir', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2719, 'ad-Dakhiliyah', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2720, 'adh-Dhahirah', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2721, 'al-Batinah', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2722, 'ash-Sharqiyah', 165);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2723, 'Baluchistan', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2724, 'Federal Capital Area', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2725, 'Federally administered Tribal ', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2726, 'North-West Frontier', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2727, 'Northern Areas', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2728, 'Punjab', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2729, 'Sind', 166);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2730, 'Aimeliik', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2731, 'Airai', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2732, 'Angaur', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2733, 'Hatobohei', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2734, 'Kayangel', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2735, 'Koror', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2736, 'Melekeok', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2737, 'Ngaraard', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2738, 'Ngardmau', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2739, 'Ngaremlengui', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2740, 'Ngatpang', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2741, 'Ngchesar', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2742, 'Ngerchelong', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2743, 'Ngiwal', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2744, 'Peleliu', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2745, 'Sonsorol', 167);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2746, 'Ariha', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2747, 'Bayt Lahm', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2748, 'Bethlehem', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2749, 'Dayr-al-Balah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2750, 'Ghazzah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2751, 'Ghazzah ash-Shamaliyah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2752, 'Janin', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2753, 'Khan Yunis', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2754, 'Nabulus', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2755, 'Qalqilyah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2756, 'Rafah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2757, 'Ram Allah wal-Birah', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2758, 'Salfit', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2759, 'Tubas', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2760, 'Tulkarm', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2761, 'al-Khalil', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2762, 'al-Quds', 168);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2763, 'Bocas del Toro', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2764, 'Chiriqui', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2765, 'Cocle', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2766, 'Colon', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2767, 'Darien', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2768, 'Embera', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2769, 'Herrera', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2770, 'Kuna Yala', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2771, 'Los Santos', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2772, 'Ngobe Bugle', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2773, 'Panama', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2774, 'Veraguas', 169);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2775, 'East New Britain', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2776, 'East Sepik', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2777, 'Eastern Highlands', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2778, 'Enga', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2779, 'Fly River', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2780, 'Gulf', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2781, 'Madang', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2782, 'Manus', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2783, 'Milne Bay', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2784, 'Morobe', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2785, 'National Capital District', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2786, 'New Ireland', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2787, 'North Solomons', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2788, 'Oro', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2789, 'Sandaun', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2790, 'Simbu', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2791, 'Southern Highlands', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2792, 'West New Britain', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2793, 'Western Highlands', 170);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2794, 'Alto Paraguay', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2795, 'Alto Parana', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2796, 'Amambay', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2797, 'Asuncion', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2798, 'Boqueron', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2799, 'Caaguazu', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2800, 'Caazapa', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2801, 'Canendiyu', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2802, 'Central', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2803, 'Concepcion', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2804, 'Cordillera', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2805, 'Guaira', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2806, 'Itapua', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2807, 'Misiones', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2808, 'Neembucu', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2809, 'Paraguari', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2810, 'Presidente Hayes', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2811, 'San Pedro', 171);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2812, 'Amazonas', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2813, 'Ancash', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2814, 'Apurimac', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2815, 'Arequipa', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2816, 'Ayacucho', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2817, 'Cajamarca', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2818, 'Cusco', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2819, 'Huancavelica', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2820, 'Huanuco', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2821, 'Ica', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2822, 'Junin', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2823, 'La Libertad', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2824, 'Lambayeque', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2825, 'Lima y Callao', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2826, 'Loreto', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2827, 'Madre de Dios', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2828, 'Moquegua', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2829, 'Pasco', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2830, 'Piura', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2831, 'Puno', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2832, 'San Martin', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2833, 'Tacna', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2834, 'Tumbes', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2835, 'Ucayali', 172);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2836, 'Batangas', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2837, 'Bicol', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2838, 'Bulacan', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2839, 'Cagayan', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2840, 'Caraga', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2841, 'Central Luzon', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2842, 'Central Mindanao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2843, 'Central Visayas', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2844, 'Cordillera', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2845, 'Davao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2846, 'Eastern Visayas', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2847, 'Greater Metropolitan Area', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2848, 'Ilocos', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2849, 'Laguna', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2850, 'Luzon', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2851, 'Mactan', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2852, 'Metropolitan Manila Area', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2853, 'Muslim Mindanao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2854, 'Northern Mindanao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2855, 'Southern Mindanao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2856, 'Southern Tagalog', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2857, 'Western Mindanao', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2858, 'Western Visayas', 173);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2859, 'Pitcairn Island', 174);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2860, 'Biale Blota', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2861, 'Dobroszyce', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2862, 'Dolnoslaskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2863, 'Dziekanow Lesny', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2864, 'Hopowo', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2865, 'Kartuzy', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2866, 'Koscian', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2867, 'Krakow', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2868, 'Kujawsko-Pomorskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2869, 'Lodzkie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2870, 'Lubelskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2871, 'Lubuskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2872, 'Malomice', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2873, 'Malopolskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2874, 'Mazowieckie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2875, 'Mirkow', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2876, 'Opolskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2877, 'Ostrowiec', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2878, 'Podkarpackie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2879, 'Podlaskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2880, 'Polska', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2881, 'Pomorskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2882, 'Poznan', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2883, 'Pruszkow', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2884, 'Rymanowska', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2885, 'Rzeszow', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2886, 'Slaskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2887, 'Stare Pole', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2888, 'Swietokrzyskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2889, 'Warminsko-Mazurskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2890, 'Warsaw', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2891, 'Wejherowo', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2892, 'Wielkopolskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2893, 'Wroclaw', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2894, 'Zachodnio-Pomorskie', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2895, 'Zukowo', 175);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2896, 'Abrantes', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2897, 'Acores', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2898, 'Alentejo', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2899, 'Algarve', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2900, 'Braga', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2901, 'Centro', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2902, 'Distrito de Leiria', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2903, 'Distrito de Viana do Castelo', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2904, 'Distrito de Vila Real', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2905, 'Distrito do Porto', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2906, 'Lisboa e Vale do Tejo', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2907, 'Madeira', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2908, 'Norte', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2909, 'Paivas', 176);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2910, 'Arecibo', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2911, 'Bayamon', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2912, 'Carolina', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2913, 'Florida', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2914, 'Guayama', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2915, 'Humacao', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2916, 'Mayaguez-Aguadilla', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2917, 'Ponce', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2918, 'Salinas', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2919, 'San Juan', 177);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2920, 'Doha', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2921, 'Jarian-al-Batnah', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2922, 'Umm Salal', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2923, 'ad-Dawhah', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2924, 'al-Ghuwayriyah', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2925, 'al-Jumayliyah', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2926, 'al-Khawr', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2927, 'al-Wakrah', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2928, 'ar-Rayyan', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2929, 'ash-Shamal', 178);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2930, 'Saint-Benoit', 179);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2931, 'Saint-Denis', 179);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2932, 'Saint-Paul', 179);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2933, 'Saint-Pierre', 179);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2934, 'Alba', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2935, 'Arad', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2936, 'Arges', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2937, 'Bacau', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2938, 'Bihor', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2939, 'Bistrita-Nasaud', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2940, 'Botosani', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2941, 'Braila', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2942, 'Brasov', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2943, 'Bucuresti', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2944, 'Buzau', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2945, 'Calarasi', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2946, 'Caras-Severin', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2947, 'Cluj', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2948, 'Constanta', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2949, 'Covasna', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2950, 'Dambovita', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2951, 'Dolj', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2952, 'Galati', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2953, 'Giurgiu', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2954, 'Gorj', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2955, 'Harghita', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2956, 'Hunedoara', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2957, 'Ialomita', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2958, 'Iasi', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2959, 'Ilfov', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2960, 'Maramures', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2961, 'Mehedinti', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2962, 'Mures', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2963, 'Neamt', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2964, 'Olt', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2965, 'Prahova', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2966, 'Salaj', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2967, 'Satu Mare', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2968, 'Sibiu', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2969, 'Sondelor', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2970, 'Suceava', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2971, 'Teleorman', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2972, 'Timis', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2973, 'Tulcea', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2974, 'Valcea', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2975, 'Vaslui', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2976, 'Vrancea', 180);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2977, 'Adygeja', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2978, 'Aga', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2979, 'Alanija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2980, 'Altaj', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2981, 'Amur', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2982, 'Arhangelsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2983, 'Astrahan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2984, 'Bashkortostan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2985, 'Belgorod', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2986, 'Brjansk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2987, 'Burjatija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2988, 'Chechenija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2989, 'Cheljabinsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2990, 'Chita', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2991, 'Chukotka', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2992, 'Chuvashija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2993, 'Dagestan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2994, 'Evenkija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2995, 'Gorno-Altaj', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2996, 'Habarovsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2997, 'Hakasija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2998, 'Hanty-Mansija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (2999, 'Ingusetija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3000, 'Irkutsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3001, 'Ivanovo', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3002, 'Jamalo-Nenets', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3003, 'Jaroslavl', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3004, 'Jevrej', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3005, 'Kabardino-Balkarija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3006, 'Kaliningrad', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3007, 'Kalmykija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3008, 'Kaluga', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3009, 'Kamchatka', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3010, 'Karachaj-Cherkessija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3011, 'Karelija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3012, 'Kemerovo', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3013, 'Khabarovskiy Kray', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3014, 'Kirov', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3015, 'Komi', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3016, 'Komi-Permjakija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3017, 'Korjakija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3018, 'Kostroma', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3019, 'Krasnodar', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3020, 'Krasnojarsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3021, 'Krasnoyarskiy Kray', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3022, 'Kurgan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3023, 'Kursk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3024, 'Leningrad', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3025, 'Lipeck', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3026, 'Magadan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3027, 'Marij El', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3028, 'Mordovija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3029, 'Moscow', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3030, 'Moskovskaja Oblast', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3031, 'Moskovskaya Oblast', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3032, 'Moskva', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3033, 'Murmansk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3034, 'Nenets', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3035, 'Nizhnij Novgorod', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3036, 'Novgorod', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3037, 'Novokusnezk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3038, 'Novosibirsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3039, 'Omsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3040, 'Orenburg', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3041, 'Orjol', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3042, 'Penza', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3043, 'Perm', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3044, 'Primorje', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3045, 'Pskov', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3046, 'Pskovskaya Oblast', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3047, 'Rjazan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3048, 'Rostov', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3049, 'Saha', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3050, 'Sahalin', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3051, 'Samara', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3052, 'Samarskaya', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3053, 'Sankt-Peterburg', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3054, 'Saratov', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3055, 'Smolensk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3056, 'Stavropol', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3057, 'Sverdlovsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3058, 'Tajmyrija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3059, 'Tambov', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3060, 'Tatarstan', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3061, 'Tjumen', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3062, 'Tomsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3063, 'Tula', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3064, 'Tver', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3065, 'Tyva', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3066, 'Udmurtija', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3067, 'Uljanovsk', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3068, 'Ulyanovskaya Oblast', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3069, 'Ust-Orda', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3070, 'Vladimir', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3071, 'Volgograd', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3072, 'Vologda', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3073, 'Voronezh', 181);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3074, 'Butare', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3075, 'Byumba', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3076, 'Cyangugu', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3077, 'Gikongoro', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3078, 'Gisenyi', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3079, 'Gitarama', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3080, 'Kibungo', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3081, 'Kibuye', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3082, 'Kigali-ngali', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3083, 'Ruhengeri', 182);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3084, 'Ascension', 183);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3085, 'Gough Island', 183);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3086, 'Saint Helena', 183);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3087, 'Tristan da Cunha', 183);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3088, 'Christ Church Nichola Town', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3089, 'Saint Anne Sandy Point', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3090, 'Saint George Basseterre', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3091, 'Saint George Gingerland', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3092, 'Saint James Windward', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3093, 'Saint John Capesterre', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3094, 'Saint John Figtree', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3095, 'Saint Mary Cayon', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3096, 'Saint Paul Capesterre', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3097, 'Saint Paul Charlestown', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3098, 'Saint Peter Basseterre', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3099, 'Saint Thomas Lowland', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3100, 'Saint Thomas Middle Island', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3101, 'Trinity Palmetto Point', 184);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3102, 'Anse-la-Raye', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3103, 'Canaries', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3104, 'Castries', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3105, 'Choiseul', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3106, 'Dennery', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3107, 'Gros Inlet', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3108, 'Laborie', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3109, 'Micoud', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3110, 'Soufriere', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3111, 'Vieux Fort', 185);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3112, 'Miquelon-Langlade', 186);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3113, 'Saint-Pierre', 186);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3114, 'Charlotte', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3115, 'Grenadines', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3116, 'Saint Andrew', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3117, 'Saint David', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3118, 'Saint George', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3119, 'Saint Patrick', 187);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3120, 'A''ana', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3121, 'Aiga-i-le-Tai', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3122, 'Atua', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3123, 'Fa''asaleleaga', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3124, 'Gaga''emauga', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3125, 'Gagaifomauga', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3126, 'Palauli', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3127, 'Satupa''itea', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3128, 'Tuamasaga', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3129, 'Va''a-o-Fonoti', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3130, 'Vaisigano', 188);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3131, 'Acquaviva', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3132, 'Borgo Maggiore', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3133, 'Chiesanuova', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3134, 'Domagnano', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3135, 'Faetano', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3136, 'Fiorentino', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3137, 'Montegiardino', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3138, 'San Marino', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3139, 'Serravalle', 189);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3140, 'Agua Grande', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3141, 'Cantagalo', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3142, 'Lemba', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3143, 'Lobata', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3144, 'Me-Zochi', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3145, 'Pague', 190);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3146, 'Al Khobar', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3147, 'Aseer', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3148, 'Ash Sharqiyah', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3149, 'Asir', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3150, 'Central Province', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3151, 'Eastern Province', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3152, 'Ha''il', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3153, 'Jawf', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3154, 'Jizan', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3155, 'Makkah', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3156, 'Najran', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3157, 'Qasim', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3158, 'Tabuk', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3159, 'Western Province', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3160, 'al-Bahah', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3161, 'al-Hudud-ash-Shamaliyah', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3162, 'al-Madinah', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3163, 'ar-Riyad', 191);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3164, 'Dakar', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3165, 'Diourbel', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3166, 'Fatick', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3167, 'Kaolack', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3168, 'Kolda', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3169, 'Louga', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3170, 'Saint-Louis', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3171, 'Tambacounda', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3172, 'Thies', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3173, 'Ziguinchor', 192);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3174, 'Central Serbia', 193);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3175, 'Kosovo and Metohija', 193);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3176, 'Vojvodina', 193);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3177, 'Anse Boileau', 194);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3178, 'Anse Royale', 194);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3179, 'Cascade', 194);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3180, 'Takamaka', 194);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3181, 'Victoria', 194);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3182, 'Eastern', 195);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3183, 'Northern', 195);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3184, 'Southern', 195);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3185, 'Western', 195);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3186, 'Singapore', 196);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3187, 'Banskobystricky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3188, 'Bratislavsky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3189, 'Kosicky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3190, 'Nitriansky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3191, 'Presovsky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3192, 'Trenciansky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3193, 'Trnavsky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3194, 'Zilinsky', 197);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3195, 'Benedikt', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3196, 'Gorenjska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3197, 'Gorishka', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3198, 'Jugovzhodna Slovenija', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3199, 'Koroshka', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3200, 'Notranjsko-krashka', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3201, 'Obalno-krashka', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3202, 'Obcina Domzale', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3203, 'Obcina Vitanje', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3204, 'Osrednjeslovenska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3205, 'Podravska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3206, 'Pomurska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3207, 'Savinjska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3208, 'Slovenian Littoral', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3209, 'Spodnjeposavska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3210, 'Zasavska', 198);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3211, 'Pitcairn', 199);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3212, 'Central', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3213, 'Choiseul', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3214, 'Guadalcanal', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3215, 'Isabel', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3216, 'Makira and Ulawa', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3217, 'Malaita', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3218, 'Rennell and Bellona', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3219, 'Temotu', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3220, 'Western', 200);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3221, 'Awdal', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3222, 'Bakol', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3223, 'Banadir', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3224, 'Bari', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3225, 'Bay', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3226, 'Galgudug', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3227, 'Gedo', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3228, 'Hiran', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3229, 'Jubbada Hose', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3230, 'Jubbadha Dexe', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3231, 'Mudug', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3232, 'Nugal', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3233, 'Sanag', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3234, 'Shabellaha Dhexe', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3235, 'Shabellaha Hose', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3236, 'Togdher', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3237, 'Woqoyi Galbed', 201);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3238, 'Eastern Cape', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3239, 'Free State', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3240, 'Gauteng', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3241, 'Kempton Park', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3242, 'Kramerville', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3243, 'KwaZulu Natal', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3244, 'Limpopo', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3245, 'Mpumalanga', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3246, 'North West', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3247, 'Northern Cape', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3248, 'Parow', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3249, 'Table View', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3250, 'Umtentweni', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3251, 'Western Cape', 202);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3252, 'South Georgia', 203);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3253, 'Central Equatoria', 204);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3254, 'A Coruna', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3255, 'Alacant', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3256, 'Alava', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3257, 'Albacete', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3258, 'Almeria', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3259, 'Andalucia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3260, 'Asturias', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3261, 'Avila', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3262, 'Badajoz', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3263, 'Balears', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3264, 'Barcelona', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3265, 'Bertamirans', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3266, 'Biscay', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3267, 'Burgos', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3268, 'Caceres', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3269, 'Cadiz', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3270, 'Cantabria', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3271, 'Castello', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3272, 'Catalunya', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3273, 'Ceuta', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3274, 'Ciudad Real', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3275, 'Comunidad Autonoma de Canarias', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3276, 'Comunidad Autonoma de Cataluna', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3277, 'Comunidad Autonoma de Galicia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3278, 'Comunidad Autonoma de las Isla', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3279, 'Comunidad Autonoma del Princip', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3280, 'Comunidad Valenciana', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3281, 'Cordoba', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3282, 'Cuenca', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3283, 'Gipuzkoa', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3284, 'Girona', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3285, 'Granada', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3286, 'Guadalajara', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3287, 'Guipuzcoa', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3288, 'Huelva', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3289, 'Huesca', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3290, 'Jaen', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3291, 'La Rioja', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3292, 'Las Palmas', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3293, 'Leon', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3294, 'Lerida', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3295, 'Lleida', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3296, 'Lugo', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3297, 'Madrid', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3298, 'Malaga', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3299, 'Melilla', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3300, 'Murcia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3301, 'Navarra', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3302, 'Ourense', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3303, 'Pais Vasco', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3304, 'Palencia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3305, 'Pontevedra', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3306, 'Salamanca', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3307, 'Santa Cruz de Tenerife', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3308, 'Segovia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3309, 'Sevilla', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3310, 'Soria', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3311, 'Tarragona', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3312, 'Tenerife', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3313, 'Teruel', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3314, 'Toledo', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3315, 'Valencia', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3316, 'Valladolid', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3317, 'Vizcaya', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3318, 'Zamora', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3319, 'Zaragoza', 205);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3320, 'Amparai', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3321, 'Anuradhapuraya', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3322, 'Badulla', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3323, 'Boralesgamuwa', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3324, 'Colombo', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3325, 'Galla', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3326, 'Gampaha', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3327, 'Hambantota', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3328, 'Kalatura', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3329, 'Kegalla', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3330, 'Kilinochchi', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3331, 'Kurunegala', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3332, 'Madakalpuwa', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3333, 'Maha Nuwara', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3334, 'Malwana', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3335, 'Mannarama', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3336, 'Matale', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3337, 'Matara', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3338, 'Monaragala', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3339, 'Mullaitivu', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3340, 'North Eastern Province', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3341, 'North Western Province', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3342, 'Nuwara Eliya', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3343, 'Polonnaruwa', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3344, 'Puttalama', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3345, 'Ratnapuraya', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3346, 'Southern Province', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3347, 'Tirikunamalaya', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3348, 'Tuscany', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3349, 'Vavuniyawa', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3350, 'Western Province', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3351, 'Yapanaya', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3352, 'kadawatha', 206);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3353, 'A''ali-an-Nil', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3354, 'Bahr-al-Jabal', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3355, 'Central Equatoria', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3356, 'Gharb Bahr-al-Ghazal', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3357, 'Gharb Darfur', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3358, 'Gharb Kurdufan', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3359, 'Gharb-al-Istiwa''iyah', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3360, 'Janub Darfur', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3361, 'Janub Kurdufan', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3362, 'Junqali', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3363, 'Kassala', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3364, 'Nahr-an-Nil', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3365, 'Shamal Bahr-al-Ghazal', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3366, 'Shamal Darfur', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3367, 'Shamal Kurdufan', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3368, 'Sharq-al-Istiwa''iyah', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3369, 'Sinnar', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3370, 'Warab', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3371, 'Wilayat al Khartum', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3372, 'al-Bahr-al-Ahmar', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3373, 'al-Buhayrat', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3374, 'al-Jazirah', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3375, 'al-Khartum', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3376, 'al-Qadarif', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3377, 'al-Wahdah', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3378, 'an-Nil-al-Abyad', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3379, 'an-Nil-al-Azraq', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3380, 'ash-Shamaliyah', 207);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3381, 'Brokopondo', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3382, 'Commewijne', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3383, 'Coronie', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3384, 'Marowijne', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3385, 'Nickerie', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3386, 'Para', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3387, 'Paramaribo', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3388, 'Saramacca', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3389, 'Wanica', 208);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3390, 'Svalbard', 209);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3391, 'Hhohho', 210);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3392, 'Lubombo', 210);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3393, 'Manzini', 210);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3394, 'Shiselweni', 210);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3395, 'Alvsborgs Lan', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3396, 'Angermanland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3397, 'Blekinge', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3398, 'Bohuslan', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3399, 'Dalarna', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3400, 'Gavleborg', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3401, 'Gaza', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3402, 'Gotland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3403, 'Halland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3404, 'Jamtland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3405, 'Jonkoping', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3406, 'Kalmar', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3407, 'Kristianstads', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3408, 'Kronoberg', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3409, 'Norrbotten', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3410, 'Orebro', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3411, 'Ostergotland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3412, 'Saltsjo-Boo', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3413, 'Skane', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3414, 'Smaland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3415, 'Sodermanland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3416, 'Stockholm', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3417, 'Uppsala', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3418, 'Varmland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3419, 'Vasterbotten', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3420, 'Vastergotland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3421, 'Vasternorrland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3422, 'Vastmanland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3423, 'Vastra Gotaland', 211);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3424, 'Aargau', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3425, 'Appenzell Inner-Rhoden', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3426, 'Appenzell-Ausser Rhoden', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3427, 'Basel-Landschaft', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3428, 'Basel-Stadt', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3429, 'Bern', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3430, 'Canton Ticino', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3431, 'Fribourg', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3432, 'Geneve', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3433, 'Glarus', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3434, 'Graubunden', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3435, 'Heerbrugg', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3436, 'Jura', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3437, 'Kanton Aargau', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3438, 'Luzern', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3439, 'Morbio Inferiore', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3440, 'Muhen', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3441, 'Neuchatel', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3442, 'Nidwalden', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3443, 'Obwalden', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3444, 'Sankt Gallen', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3445, 'Schaffhausen', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3446, 'Schwyz', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3447, 'Solothurn', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3448, 'Thurgau', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3449, 'Ticino', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3450, 'Uri', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3451, 'Valais', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3452, 'Vaud', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3453, 'Vauffelin', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3454, 'Zug', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3455, 'Zurich', 212);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3456, 'Aleppo', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3457, 'Dar''a', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3458, 'Dayr-az-Zawr', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3459, 'Dimashq', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3460, 'Halab', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3461, 'Hamah', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3462, 'Hims', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3463, 'Idlib', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3464, 'Madinat Dimashq', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3465, 'Tartus', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3466, 'al-Hasakah', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3467, 'al-Ladhiqiyah', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3468, 'al-Qunaytirah', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3469, 'ar-Raqqah', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3470, 'as-Suwayda', 213);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3471, 'Changhwa', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3472, 'Chiayi Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3473, 'Chiayi Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3474, 'Eastern Taipei', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3475, 'Hsinchu Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3476, 'Hsinchu Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3477, 'Hualien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3478, 'Ilan', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3479, 'Kaohsiung Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3480, 'Kaohsiung Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3481, 'Keelung Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3482, 'Kinmen', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3483, 'Miaoli', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3484, 'Nantou', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3485, 'Northern Taiwan', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3486, 'Penghu', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3487, 'Pingtung', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3488, 'Taichung', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3489, 'Taichung Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3490, 'Taichung Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3491, 'Tainan Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3492, 'Tainan Shih', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3493, 'Taipei Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3494, 'Taipei Shih / Taipei Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3495, 'Taitung', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3496, 'Taoyuan', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3497, 'Yilan', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3498, 'Yun-Lin Hsien', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3499, 'Yunlin', 214);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3500, 'Dushanbe', 215);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3501, 'Gorno-Badakhshan', 215);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3502, 'Karotegin', 215);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3503, 'Khatlon', 215);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3504, 'Sughd', 215);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3505, 'Arusha', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3506, 'Dar es Salaam', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3507, 'Dodoma', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3508, 'Iringa', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3509, 'Kagera', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3510, 'Kigoma', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3511, 'Kilimanjaro', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3512, 'Lindi', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3513, 'Mara', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3514, 'Mbeya', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3515, 'Morogoro', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3516, 'Mtwara', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3517, 'Mwanza', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3518, 'Pwani', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3519, 'Rukwa', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3520, 'Ruvuma', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3521, 'Shinyanga', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3522, 'Singida', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3523, 'Tabora', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3524, 'Tanga', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3525, 'Zanzibar and Pemba', 216);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3526, 'Amnat Charoen', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3527, 'Ang Thong', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3528, 'Bangkok', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3529, 'Buri Ram', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3530, 'Chachoengsao', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3531, 'Chai Nat', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3532, 'Chaiyaphum', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3533, 'Changwat Chaiyaphum', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3534, 'Chanthaburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3535, 'Chiang Mai', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3536, 'Chiang Rai', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3537, 'Chon Buri', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3538, 'Chumphon', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3539, 'Kalasin', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3540, 'Kamphaeng Phet', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3541, 'Kanchanaburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3542, 'Khon Kaen', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3543, 'Krabi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3544, 'Krung Thep', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3545, 'Lampang', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3546, 'Lamphun', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3547, 'Loei', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3548, 'Lop Buri', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3549, 'Mae Hong Son', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3550, 'Maha Sarakham', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3551, 'Mukdahan', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3552, 'Nakhon Nayok', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3553, 'Nakhon Pathom', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3554, 'Nakhon Phanom', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3555, 'Nakhon Ratchasima', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3556, 'Nakhon Sawan', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3557, 'Nakhon Si Thammarat', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3558, 'Nan', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3559, 'Narathiwat', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3560, 'Nong Bua Lam Phu', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3561, 'Nong Khai', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3562, 'Nonthaburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3563, 'Pathum Thani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3564, 'Pattani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3565, 'Phangnga', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3566, 'Phatthalung', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3567, 'Phayao', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3568, 'Phetchabun', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3569, 'Phetchaburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3570, 'Phichit', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3571, 'Phitsanulok', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3572, 'Phra Nakhon Si Ayutthaya', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3573, 'Phrae', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3574, 'Phuket', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3575, 'Prachin Buri', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3576, 'Prachuap Khiri Khan', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3577, 'Ranong', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3578, 'Ratchaburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3579, 'Rayong', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3580, 'Roi Et', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3581, 'Sa Kaeo', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3582, 'Sakon Nakhon', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3583, 'Samut Prakan', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3584, 'Samut Sakhon', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3585, 'Samut Songkhran', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3586, 'Saraburi', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3587, 'Satun', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3588, 'Si Sa Ket', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3589, 'Sing Buri', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3590, 'Songkhla', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3591, 'Sukhothai', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3592, 'Suphan Buri', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3593, 'Surat Thani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3594, 'Surin', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3595, 'Tak', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3596, 'Trang', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3597, 'Trat', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3598, 'Ubon Ratchathani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3599, 'Udon Thani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3600, 'Uthai Thani', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3601, 'Uttaradit', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3602, 'Yala', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3603, 'Yasothon', 217);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3604, 'Centre', 218);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3605, 'Kara', 218);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3606, 'Maritime', 218);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3607, 'Plateaux', 218);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3608, 'Savanes', 218);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3609, 'Atafu', 219);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3610, 'Fakaofo', 219);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3611, 'Nukunonu', 219);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3612, 'Eua', 220);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3613, 'Ha''apai', 220);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3614, 'Niuas', 220);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3615, 'Tongatapu', 220);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3616, 'Vava''u', 220);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3617, 'Arima-Tunapuna-Piarco', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3618, 'Caroni', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3619, 'Chaguanas', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3620, 'Couva-Tabaquite-Talparo', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3621, 'Diego Martin', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3622, 'Glencoe', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3623, 'Penal Debe', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3624, 'Point Fortin', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3625, 'Port of Spain', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3626, 'Princes Town', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3627, 'Saint George', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3628, 'San Fernando', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3629, 'San Juan', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3630, 'Sangre Grande', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3631, 'Siparia', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3632, 'Tobago', 221);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3633, 'Aryanah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3634, 'Bajah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3635, 'Bin ''Arus', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3636, 'Binzart', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3637, 'Gouvernorat de Ariana', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3638, 'Gouvernorat de Nabeul', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3639, 'Gouvernorat de Sousse', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3640, 'Hammamet Yasmine', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3641, 'Jundubah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3642, 'Madaniyin', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3643, 'Manubah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3644, 'Monastir', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3645, 'Nabul', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3646, 'Qabis', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3647, 'Qafsah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3648, 'Qibili', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3649, 'Safaqis', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3650, 'Sfax', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3651, 'Sidi Bu Zayd', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3652, 'Silyanah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3653, 'Susah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3654, 'Tatawin', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3655, 'Tawzar', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3656, 'Tunis', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3657, 'Zaghwan', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3658, 'al-Kaf', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3659, 'al-Mahdiyah', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3660, 'al-Munastir', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3661, 'al-Qasrayn', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3662, 'al-Qayrawan', 222);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3663, 'Adana', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3664, 'Adiyaman', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3665, 'Afyon', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3666, 'Agri', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3667, 'Aksaray', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3668, 'Amasya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3669, 'Ankara', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3670, 'Antalya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3671, 'Ardahan', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3672, 'Artvin', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3673, 'Aydin', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3674, 'Balikesir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3675, 'Bartin', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3676, 'Batman', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3677, 'Bayburt', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3678, 'Bilecik', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3679, 'Bingol', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3680, 'Bitlis', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3681, 'Bolu', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3682, 'Burdur', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3683, 'Bursa', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3684, 'Canakkale', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3685, 'Cankiri', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3686, 'Corum', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3687, 'Denizli', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3688, 'Diyarbakir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3689, 'Duzce', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3690, 'Edirne', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3691, 'Elazig', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3692, 'Erzincan', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3693, 'Erzurum', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3694, 'Eskisehir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3695, 'Gaziantep', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3696, 'Giresun', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3697, 'Gumushane', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3698, 'Hakkari', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3699, 'Hatay', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3700, 'Icel', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3701, 'Igdir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3702, 'Isparta', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3703, 'Istanbul', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3704, 'Izmir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3705, 'Kahramanmaras', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3706, 'Karabuk', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3707, 'Karaman', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3708, 'Kars', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3709, 'Karsiyaka', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3710, 'Kastamonu', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3711, 'Kayseri', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3712, 'Kilis', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3713, 'Kirikkale', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3714, 'Kirklareli', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3715, 'Kirsehir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3716, 'Kocaeli', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3717, 'Konya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3718, 'Kutahya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3719, 'Lefkosa', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3720, 'Malatya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3721, 'Manisa', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3722, 'Mardin', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3723, 'Mugla', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3724, 'Mus', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3725, 'Nevsehir', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3726, 'Nigde', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3727, 'Ordu', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3728, 'Osmaniye', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3729, 'Rize', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3730, 'Sakarya', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3731, 'Samsun', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3732, 'Sanliurfa', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3733, 'Siirt', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3734, 'Sinop', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3735, 'Sirnak', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3736, 'Sivas', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3737, 'Tekirdag', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3738, 'Tokat', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3739, 'Trabzon', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3740, 'Tunceli', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3741, 'Usak', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3742, 'Van', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3743, 'Yalova', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3744, 'Yozgat', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3745, 'Zonguldak', 223);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3746, 'Ahal', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3747, 'Asgabat', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3748, 'Balkan', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3749, 'Dasoguz', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3750, 'Lebap', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3751, 'Mari', 224);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3752, 'Grand Turk', 225);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3753, 'South Caicos and East Caicos', 225);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3754, 'Funafuti', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3755, 'Nanumanga', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3756, 'Nanumea', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3757, 'Niutao', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3758, 'Nui', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3759, 'Nukufetau', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3760, 'Nukulaelae', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3761, 'Vaitupu', 226);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3762, 'Central', 227);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3763, 'Eastern', 227);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3764, 'Northern', 227);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3765, 'Western', 227);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3766, 'Cherkas''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3767, 'Chernihivs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3768, 'Chernivets''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3769, 'Crimea', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3770, 'Dnipropetrovska', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3771, 'Donets''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3772, 'Ivano-Frankivs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3773, 'Kharkiv', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3774, 'Kharkov', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3775, 'Khersonska', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3776, 'Khmel''nyts''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3777, 'Kirovohrad', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3778, 'Krym', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3779, 'Kyyiv', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3780, 'Kyyivs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3781, 'L''vivs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3782, 'Luhans''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3783, 'Mykolayivs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3784, 'Odes''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3785, 'Odessa', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3786, 'Poltavs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3787, 'Rivnens''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3788, 'Sevastopol''', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3789, 'Sums''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3790, 'Ternopil''s''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3791, 'Volyns''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3792, 'Vynnyts''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3793, 'Zakarpats''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3794, 'Zaporizhia', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3795, 'Zhytomyrs''ka', 228);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3796, 'Abu Zabi', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3797, 'Ajman', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3798, 'Dubai', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3799, 'Ras al-Khaymah', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3800, 'Sharjah', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3801, 'Sharjha', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3802, 'Umm al Qaywayn', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3803, 'al-Fujayrah', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3804, 'ash-Shariqah', 229);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3805, 'Aberdeen', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3806, 'Aberdeenshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3807, 'Argyll', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3808, 'Armagh', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3809, 'Bedfordshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3810, 'Belfast', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3811, 'Berkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3812, 'Birmingham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3813, 'Brechin', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3814, 'Bridgnorth', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3815, 'Bristol', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3816, 'Buckinghamshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3817, 'Cambridge', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3818, 'Cambridgeshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3819, 'Channel Islands', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3820, 'Cheshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3821, 'Cleveland', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3822, 'Co Fermanagh', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3823, 'Conwy', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3824, 'Cornwall', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3825, 'Coventry', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3826, 'Craven Arms', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3827, 'Cumbria', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3828, 'Denbighshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3829, 'Derby', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3830, 'Derbyshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3831, 'Devon', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3832, 'Dial Code Dungannon', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3833, 'Didcot', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3834, 'Dorset', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3835, 'Dunbartonshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3836, 'Durham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3837, 'East Dunbartonshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3838, 'East Lothian', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3839, 'East Midlands', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3840, 'East Sussex', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3841, 'East Yorkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3842, 'England', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3843, 'Essex', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3844, 'Fermanagh', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3845, 'Fife', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3846, 'Flintshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3847, 'Fulham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3848, 'Gainsborough', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3849, 'Glocestershire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3850, 'Gwent', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3851, 'Hampshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3852, 'Hants', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3853, 'Herefordshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3854, 'Hertfordshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3855, 'Ireland', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3856, 'Isle Of Man', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3857, 'Isle of Wight', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3858, 'Kenford', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3859, 'Kent', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3860, 'Kilmarnock', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3861, 'Lanarkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3862, 'Lancashire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3863, 'Leicestershire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3864, 'Lincolnshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3865, 'Llanymynech', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3866, 'London', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3867, 'Ludlow', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3868, 'Manchester', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3869, 'Mayfair', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3870, 'Merseyside', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3871, 'Mid Glamorgan', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3872, 'Middlesex', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3873, 'Mildenhall', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3874, 'Monmouthshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3875, 'Newton Stewart', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3876, 'Norfolk', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3877, 'North Humberside', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3878, 'North Yorkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3879, 'Northamptonshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3880, 'Northants', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3881, 'Northern Ireland', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3882, 'Northumberland', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3883, 'Nottinghamshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3884, 'Oxford', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3885, 'Powys', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3886, 'Roos-shire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3887, 'SUSSEX', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3888, 'Sark', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3889, 'Scotland', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3890, 'Scottish Borders', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3891, 'Shropshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3892, 'Somerset', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3893, 'South Glamorgan', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3894, 'South Wales', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3895, 'South Yorkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3896, 'Southwell', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3897, 'Staffordshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3898, 'Strabane', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3899, 'Suffolk', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3900, 'Surrey', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3901, 'Sussex', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3902, 'Twickenham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3903, 'Tyne and Wear', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3904, 'Tyrone', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3905, 'Utah', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3906, 'Wales', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3907, 'Warwickshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3908, 'West Lothian', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3909, 'West Midlands', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3910, 'West Sussex', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3911, 'West Yorkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3912, 'Whissendine', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3913, 'Wiltshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3914, 'Wokingham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3915, 'Worcestershire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3916, 'Wrexham', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3917, 'Wurttemberg', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3918, 'Yorkshire', 230);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3919, 'Alabama', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3920, 'Alaska', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3921, 'Arizona', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3922, 'Arkansas', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3923, 'Byram', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3924, 'California', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3925, 'Cokato', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3926, 'Colorado', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3927, 'Connecticut', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3928, 'Delaware', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3929, 'District of Columbia', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3930, 'Florida', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3931, 'Georgia', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3932, 'Hawaii', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3933, 'Idaho', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3934, 'Illinois', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3935, 'Indiana', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3936, 'Iowa', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3937, 'Kansas', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3938, 'Kentucky', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3939, 'Louisiana', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3940, 'Lowa', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3941, 'Maine', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3942, 'Maryland', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3943, 'Massachusetts', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3944, 'Medfield', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3945, 'Michigan', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3946, 'Minnesota', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3947, 'Mississippi', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3948, 'Missouri', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3949, 'Montana', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3950, 'Nebraska', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3951, 'Nevada', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3952, 'New Hampshire', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3953, 'New Jersey', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3954, 'New Jersy', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3955, 'New Mexico', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3956, 'New York', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3957, 'North Carolina', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3958, 'North Dakota', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3959, 'Ohio', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3960, 'Oklahoma', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3961, 'Ontario', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3962, 'Oregon', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3963, 'Pennsylvania', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3964, 'Ramey', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3965, 'Rhode Island', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3966, 'South Carolina', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3967, 'South Dakota', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3968, 'Sublimity', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3969, 'Tennessee', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3970, 'Texas', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3971, 'Trimble', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3972, 'Utah', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3973, 'Vermont', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3974, 'Virginia', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3975, 'Washington', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3976, 'West Virginia', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3977, 'Wisconsin', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3978, 'Wyoming', 231);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3979, 'United "City" Minor Outlying I', 232);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3980, 'Artigas', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3981, 'Canelones', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3982, 'Cerro Largo', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3983, 'Colonia', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3984, 'Durazno', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3985, 'FLorida', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3986, 'Flores', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3987, 'Lavalleja', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3988, 'Maldonado', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3989, 'Montevideo', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3990, 'Paysandu', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3991, 'Rio Negro', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3992, 'Rivera', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3993, 'Rocha', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3994, 'Salto', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3995, 'San Jose', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3996, 'Soriano', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3997, 'Tacuarembo', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3998, 'Treinta y Tres', 233);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (3999, 'Andijon', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4000, 'Buhoro', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4001, 'Buxoro Viloyati', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4002, 'Cizah', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4003, 'Fargona', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4004, 'Horazm', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4005, 'Kaskadar', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4006, 'Korakalpogiston', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4007, 'Namangan', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4008, 'Navoi', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4009, 'Samarkand', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4010, 'Sirdare', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4011, 'Surhondar', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4012, 'Toskent', 234);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4013, 'Malampa', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4014, 'Penama', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4015, 'Sanma', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4016, 'Shefa', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4017, 'Tafea', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4018, 'Torba', 235);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4019, 'Vatican City State (Holy See)', 236);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4020, 'Amazonas', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4021, 'Anzoategui', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4022, 'Apure', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4023, 'Aragua', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4024, 'Barinas', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4025, 'Bolivar', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4026, 'Carabobo', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4027, 'Cojedes', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4028, 'Delta Amacuro', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4029, 'Distrito Federal', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4030, 'Falcon', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4031, 'Guarico', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4032, 'Lara', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4033, 'Merida', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4034, 'Miranda', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4035, 'Monagas', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4036, 'Nueva Esparta', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4037, 'Portuguesa', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4038, 'Sucre', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4039, 'Tachira', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4040, 'Trujillo', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4041, 'Vargas', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4042, 'Yaracuy', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4043, 'Zulia', 237);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4044, 'Bac Giang', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4045, 'Binh Dinh', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4046, 'Binh Duong', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4047, 'Da Nang', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4048, 'Dong Bang Song Cuu Long', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4049, 'Dong Bang Song Hong', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4050, 'Dong Nai', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4051, 'Dong Nam Bo', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4052, 'Duyen Hai Mien Trung', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4053, 'Hanoi', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4054, 'Hung Yen', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4055, 'Khu Bon Cu', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4056, 'Long An', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4057, 'Mien Nui Va Trung Du', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4058, 'Thai Nguyen', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4059, 'Thanh Pho Ho Chi Minh', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4060, 'Thu Do Ha Noi', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4061, 'Tinh Can Tho', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4062, 'Tinh Da Nang', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4063, 'Tinh Gia Lai', 238);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4064, 'Anegada', 239);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4065, 'Jost van Dyke', 239);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4066, 'Tortola', 239);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4067, 'Saint Croix', 240);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4068, 'Saint John', 240);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4069, 'Saint Thomas', 240);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4070, 'Alo', 241);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4071, 'Singave', 241);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4072, 'Wallis', 241);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4073, 'Bu Jaydur', 242);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4074, 'Wad-adh-Dhahab', 242);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4075, 'al-''Ayun', 242);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4076, 'as-Samarah', 242);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4077, '''Adan', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4078, 'Abyan', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4079, 'Dhamar', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4080, 'Hadramaut', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4081, 'Hajjah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4082, 'Hudaydah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4083, 'Ibb', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4084, 'Lahij', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4085, 'Ma''rib', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4086, 'Madinat San''a', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4087, 'Sa''dah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4088, 'Sana', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4089, 'Shabwah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4090, 'Ta''izz', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4091, 'al-Bayda', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4092, 'al-Hudaydah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4093, 'al-Jawf', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4094, 'al-Mahrah', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4095, 'al-Mahwit', 243);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4096, 'Central Serbia', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4097, 'Kosovo and Metohija', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4098, 'Montenegro', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4099, 'Republic of Serbia', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4100, 'Serbia', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4101, 'Vojvodina', 244);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4102, 'Central', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4103, 'Copperbelt', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4104, 'Eastern', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4105, 'Luapala', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4106, 'Lusaka', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4107, 'North-Western', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4108, 'Northern', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4109, 'Southern', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4110, 'Western', 245);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4111, 'Bulawayo', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4112, 'Harare', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4113, 'Manicaland', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4114, 'Mashonaland Central', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4115, 'Mashonaland East', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4116, 'Mashonaland West', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4117, 'Masvingo', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4118, 'Matabeleland North', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4119, 'Matabeleland South', 246);`
	await prisma.$executeRaw`insert into "City" (id, name, "countryId") values (4120, 'Midlands', 246);`
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
