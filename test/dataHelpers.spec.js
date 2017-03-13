var expect = require("chai").expect;
const findMultipleChoice = require('../dataHelpers')
const findDateAndText = require('../dataHelpers')

describe('dataHelpers Functions', function() {
  describe('findMultipleChoice function', function(){
    var array
    beforeEach(function() {
      array =
      [  {
        name: 'Sign Up',
        type: '',
        options: [],
        data:
        [ 'March 14',
        '01/26/2015 12:05',
        'Feb312014',
        '01/27/2015 09:37',
        '',
        '01/25/2015 20:25',
        '01/23/2015 15:24',
        '01/23/2015 12:00',
        '',
        '01/23/2015 11:06',
        '01/23/2015 10:22',
        '01/26/2015 15:26',
        '01/27/2015 12:12',
        '01/23/2015 08:38',
        '',
        '01/27/2015 11:25',
        '01/16/2015 10:45',
        '01/26/2015 08:15',
        '01/21/2015 13:41',
        '01/21/2015 12:52',
        '01/21/2015 19:50',
        '',
        '01/21/2015 08:59',
        '01/20/2015 18:25',
        '01/20/2015 12:00',
        '01/20/2015 11:56',
        '01/20/2015 09:20',
        '01/20/2015 08:09',
        '01/19/2015 21:57',
        '01/19/2015 12:53',
        '01/19/2015 11:26',
        '01/18/2015 20:05',
        '01/17/2015 20:05',
        '01/17/2015 19:56',
        '10/08/2015 15:20',
        '03/13/2015 20:55',
        '03/12/2015 11:44',
        '03/12/2015 10:09',
        '01/16/2015 16:35',
        '01/16/2015 14:47',
        '01/16/2015 09:49',
        '01/15/2015 12:40',
        '01/15/2015 09:53',
        '01/13/2015 10:43',
        '01/13/2015 10:12',
        '01/13/2015 10:08',
        '01/13/2015 08:55',
        '01/13/2015 08:25',
        '01/12/2015 08:37',
        '01/11/2015 22:56',
        '01/16/2015 11:00',
        '01/09/2015 08:47',
        '01/08/2015 21:47',
        '01/08/2015 17:12',
        '01/08/2015 13:00',
        '01/07/2015 11:00',
        '01/06/2015 18:30',
        '01/06/2015 18:00',
        '01/21/2015 11:58',
        '01/01/2015 11:27',
        '12/29/2014 12:09',
        '12/24/2014 16:20',
        '12/17/2014 20:14',
        '12/17/2014 20:14',
        '12/11/2014 20:25',
        '12/11/2014 09:41',
        '12/10/2014 20:05',
        '12/10/2014 18:00',
        '12/10/2014 12:59',
        '12/09/2014 13:39',
        '12/09/2014 13:32',
        '12/09/2014 12:53',
        '12/08/2014 12:00',
        '01/16/2014 11:15',
        '12/02/2014 08:52',
        '12/01/2014 18:44',
        '11/27/2014 22:11',
        '11/27/2014 20:45',
        '11/25/2014 16:26',
        '11/18/2014 21:43',
        '11/18/2014 10:59',
        '11/17/2014 11:39',
        '11/13/2014 15:23',
        '11/13/2014 13:33',
        '11/13/2014 12:52',
        '11/13/2014 09:53',
        '11/07/2014 09:57',
        '11/07/2014 09:25',
        '11/05/2014 08:56',
        '11/04/2014 10:51',
        '01/01/2000 00:00',
        '10/30/2014 21:50',
        '10/27/2014 15:01',
        '10/24/2014 14:10',
        '10/23/2014 12:47',
        '10/22/2014 13:30',
        '10/21/2014 16:34',
        '10/21/2014 11:12',
        '10/21/2014 08:06' ] },
        {
          name: 'ID',
          type: '',
          options: [],
          data:
          [ 'LHA443',
          'CTH441',
          'SMA439',
          'LBL110',
          'KMI440',
          'BTH437',
          'SMC436',
          'KJA111',
          'TFO434',
          'DWE433',
          'MKA432',
          'SKO442',
          'MMO444',
          'EET431',
          'SGO430',
          'APU445',
          'FEB316',
          'CED438',
          'MHE428',
          'ETI427',
          'MKO429',
          'DWE426',
          'LHO425',
          'LKO424',
          'LTA422',
          'PFL357',
          'MMC421',
          'KRI420',
          'ESK423',
          'JSM419',
          'JBE418',
          'LMA417',
          'JCO416',
          'BAC415',
          'BRI343',
          'CMO038',
          'LMA032',
          'SSC011',
          'TCR414',
          'KSL413',
          'CCA411',
          'NLI410',
          'ARO412',
          'MLM409',
          'KHA408',
          'AJO407',
          'NIN406',
          'LDO405',
          'TBE404',
          'MMB403',
          'AVH256',
          'ADU402',
          'JBE401',
          'SEM400',
          'HLA340',
          'MBI172',
          'SVD263',
          'TKE220',
          'KRO399',
          'KCU398',
          'JHO397',
          'BLA396',
          'DRO395',
          'CST213',
          'JYA393',
          'ACH392',
          'EFO391',
          'KMO334',
          'SLA390',
          'SF1058',
          'RJA387',
          'TMA386',
          'MVH385',
          'CMI384',
          'NGR383',
          'LMO382',
          'VBO273',
          'TPE381',
          'MBR380',
          'PWA379',
          'SKO378',
          'RWA377',
          'BPI376',
          'DJA375',
          'ASH374',
          'SES373',
          'MBU372',
          'TWO371',
          'MME370',
          'MSM369',
          'SBL255',
          'EGA283',
          'GZI368',
          'EBR367',
          'CCL364',
          'LFA363',
          'NSI362',
          'BKI361',
          'CGA360' ] },
          {
            name: 'Name',
            type: '',
            options: [],
            data:
            [ 'A. Lena Stewart',
            'A. Thomas Leonhard, Jr.',
            'Aaron Daste',
            'Aaron Jordan',
            'Adelaide Wisdom Benjamin',
            'Adena Boris',
            'Adria Kimbrough',
            'Adrienne Colella',
            'Aimee Eubanks Davis',
            'Aimee Quirk',
            'Al Hamaeui',
            'Al Herrera',
            'Alan Arnold',
            'Alan H. Philipson',
            'Albert Clark',
            'Albert H. Small Jr.',
            'Alden J. McDonald, Jr.',
            'Alex Beard',
            'Alex Gershanik',
            'Alex S. Lebow',
            'Alexandra Navarre-Davis',
            'Alexandra Stafford',
            'Alexis Berk',
            'Alexis Hocevar',
            'Alfred L. Groos',
            'Alice Kennedy',
            'Alison Stone',
            'Allan J. Melillo',
            'Allen Square',
            'Allison B. Randolph, III',
            'Allison H. Pena',
            'Allison Padilla-Goodman',
            'Allison Plyer',
            'Allison Tiller',
            'Alphonse Forestier',
            'Alphonse Smith',
            'Alton McRee',
            'Alva See',
            'Alvertha B. Penny',
            'Amanda Guma',
            'Amanda M. Frischhertz',
            'Amanda Mantle Winstead',
            'Amith Nagarajan',
            'Amy Ferguson',
            'Amy Knower',
            'Ana Gershanik',
            'Andre M. Rubenstein',
            'Andrea Chen',
            'Andreanecia Morris',
            'Andree K. Moss',
            'Andrew Kopplin',
            'Andrew Lee',
            'Andrew Rosenberg',
            'Andrew Wisdom',
            'André V. Hooper',
            'Anesta Taylor',
            'Angela Callais',
            'Angela Hill',
            'Angela O\'Byrne',
            'Angela Patterson',
            'Angele Davis',
            'Angele James',
            'Angele Young',
            'Angelo Kingvalsky',
            'Anita Schon',
            'Ann Duplessis',
            'Ann Marie Wilkins',
            'Anna Flynt Breaux',
            'Anna Tusa',
            'Anne E. Raymond',
            'Anne F. Redd',
            'Anne Grace',
            'Anne H. Candies',
            'Anne Morse',
            'Ansel Augustine',
            'Anthony Carter',
            'Anthony Love',
            'Anthony Recasner',
            'Anthony Wayne Richard',
            'Ariane Brennan',
            'Arnel Cosey, Ph.D.',
            'Arnold Baker',
            'Arnold Donald',
            'Arthur Busby',
            'Arthur Pulitzer',
            'Arthur W. Huguley, III',
            'Arthur Wisdom',
            'Asher Friend',
            'Ashley Heiprin',
            'Ashlyn Graves',
            'Ashton R. Hardy',
            'Ashton Ryan',
            'Aspen Steib',
            'Asuncion "Sunny" Hostin',
            'Audbrey Watson, Jr.',
            'August James',
            'August Krinke',
            'Ava Rogers',
            'B.B. St. Roman' ] },
            {
              name: 'Gender',
              type: '',
              options: [],
              data:
              [ 'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Unknown',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Unknown' ] },
              {
                name: 'Company',
                type: '',
                options: [],
                data:
                [ 'Fidelity Bank',
                '321-9-Inc',
                '',
                'Fidelity Bank',
                '',
                '',
                'Kullman Law Firm',
                'Tulane University',
                'Teach for America',
                'Jones Walker',
                'First Bank& Trust',
                'IPS Corp.',
                'Midsouth Realty Management, Inc.',
                '',
                '',
                'Southern Engineering Corporation',
                'Liberty Bank and Trust Company',
                'The Alex Beard Studio',
                'The Power Courses',
                'City of New Orleans',
                '',
                '',
                'Touro Synagogue',
                'Enterprise Holdings Inc.',
                'Sonesta',
                '',
                '',
                '',
                'PosiGen Solar Solutions',
                'ABR, III & Associates, LLC',
                'National Park Service',
                'Anti-Defamation League',
                'The Data Center',
                'The Berger Company',
                '',
                'Fidelity Bank',
                'Fidelity Bank',
                '',
                'Alvertha Penny and Associates, LLC',
                '',
                '',
                'Amanda Winstead Fine Art LLC',
                'Aptify Corporation',
                'Ferguson Freelance',
                'Peoples Health Network',
                'The Times Picayune',
                '',
                'Propeller: A Force for Social Innovation',
                'Providence Community Housing',
                '',
                'City Of New Orleans',
                'Jones Walker',
                'Howard Weil',
                'Crescent Capital Consulting',
                '',
                '',
                'Jefferson Parish',
                'WWL-TV',
                'Perez, APC',
                'UNITY of Greater New Orleans',
                'The Davis Kelley Group, LLC',
                'LCI',
                '',
                '',
                '',
                'Louisiana Federation for Children',
                'Wilkins Management, Inc.',
                '',
                'New Orleans Creole Cookery',
                '',
                '',
                '',
                '',
                '',
                'Archdiocese of New Orleans',
                'Downtown Development District',
                'SBPH',
                'Samuel J. Green Charter School',
                '',
                'Strategic Staffing Solutions',
                'Delgado Community College',
                'Baker Ready Mix Concrete & Building Materials',
                'Carnival Corporation',
                '',
                'ACP Designs',
                'Agman Louisiana, Inc',
                '',
                'Jones Walker LLP',
                'Stone Pigman Walter Wittman LLC',
                'Evans Graves Engineers',
                'Hardy, Carey, Chautin & Balkin, LLC',
                'First NBC Bank',
                'Marathon Petroleum Company',
                'CNN',
                '',
                '',
                '',
                'City of New Orleans',
                '' ] },
                {
                  name: 'Ethnicity',
                  type: '',
                  options: [],
                  data:
                  [ '',
                  '',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Caucasian',
                  'African-American',
                  'Caucasian',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  '',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'African-American',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Unknown',
                  'Unknown',
                  'Caucasian',
                  'Asian/Asian-American',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Asian/Asian-American',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  '',
                  'Caucasian',
                  'Hispanic',
                  'Unknown',
                  'Other',
                  'Unknown',
                  'Unknown',
                  '',
                  '',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  '',
                  'Caucasian',
                  'Caucasian',
                  '',
                  'Unknown',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'African-American',
                  'African-American',
                  '',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'African-American',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'Unknown',
                  'Unknown',
                  'Unknown',
                  'Unknown' ] } ]

      findMultipleChoice(array)
    })

    it('should detect which columns are Multiple Choice', function() {
      expect(array[3].type).to.equal('Multiple Choice');
      expect(array[5].type).to.equal('Multiple Choice');
    })

    it('should give options to the Multiple Choice columns', function() {
      expect(array[3].options.length).to.equal(3);
      expect(array[5].options.length).to.equal(6);
    })
  }) //end of findMultipleChoice

  describe('findDateAndText function', function(){
    var array
    beforeEach(function() {
      array =
      [  {
        name: 'Sign Up',
        type: '',
        options: [],
        data:
        [ 'March 14',
        '01/26/2015 12:05',
        'Feb312014',
        '01/27/2015 09:37',
        '',
        '01/25/2015 20:25',
        '01/23/2015 15:24',
        '01/23/2015 12:00',
        '',
        '01/23/2015 11:06',
        '01/23/2015 10:22',
        '01/26/2015 15:26',
        '01/27/2015 12:12',
        '01/23/2015 08:38',
        '',
        '01/27/2015 11:25',
        '01/16/2015 10:45',
        '01/26/2015 08:15',
        '01/21/2015 13:41',
        '01/21/2015 12:52',
        '01/21/2015 19:50',
        '',
        '01/21/2015 08:59',
        '01/20/2015 18:25',
        '01/20/2015 12:00',
        '01/20/2015 11:56',
        '01/20/2015 09:20',
        '01/20/2015 08:09',
        '01/19/2015 21:57',
        '01/19/2015 12:53',
        '01/19/2015 11:26',
        '01/18/2015 20:05',
        '01/17/2015 20:05',
        '01/17/2015 19:56',
        '10/08/2015 15:20',
        '03/13/2015 20:55',
        '03/12/2015 11:44',
        '03/12/2015 10:09',
        '01/16/2015 16:35',
        '01/16/2015 14:47',
        '01/16/2015 09:49',
        '01/15/2015 12:40',
        '01/15/2015 09:53',
        '01/13/2015 10:43',
        '01/13/2015 10:12',
        '01/13/2015 10:08',
        '01/13/2015 08:55',
        '01/13/2015 08:25',
        '01/12/2015 08:37',
        '01/11/2015 22:56',
        '01/16/2015 11:00',
        '01/09/2015 08:47',
        '01/08/2015 21:47',
        '01/08/2015 17:12',
        '01/08/2015 13:00',
        '01/07/2015 11:00',
        '01/06/2015 18:30',
        '01/06/2015 18:00',
        '01/21/2015 11:58',
        '01/01/2015 11:27',
        '12/29/2014 12:09',
        '12/24/2014 16:20',
        '12/17/2014 20:14',
        '12/17/2014 20:14',
        '12/11/2014 20:25',
        '12/11/2014 09:41',
        '12/10/2014 20:05',
        '12/10/2014 18:00',
        '12/10/2014 12:59',
        '12/09/2014 13:39',
        '12/09/2014 13:32',
        '12/09/2014 12:53',
        '12/08/2014 12:00',
        '01/16/2014 11:15',
        '12/02/2014 08:52',
        '12/01/2014 18:44',
        '11/27/2014 22:11',
        '11/27/2014 20:45',
        '11/25/2014 16:26',
        '11/18/2014 21:43',
        '11/18/2014 10:59',
        '11/17/2014 11:39',
        '11/13/2014 15:23',
        '11/13/2014 13:33',
        '11/13/2014 12:52',
        '11/13/2014 09:53',
        '11/07/2014 09:57',
        '11/07/2014 09:25',
        '11/05/2014 08:56',
        '11/04/2014 10:51',
        '01/01/2000 00:00',
        '10/30/2014 21:50',
        '10/27/2014 15:01',
        '10/24/2014 14:10',
        '10/23/2014 12:47',
        '10/22/2014 13:30',
        '10/21/2014 16:34',
        '10/21/2014 11:12',
        '10/21/2014 08:06' ] },
        {
          name: 'ID',
          type: '',
          options: [],
          data:
          [ 'LHA443',
          'CTH441',
          'SMA439',
          'LBL110',
          'KMI440',
          'BTH437',
          'SMC436',
          'KJA111',
          'TFO434',
          'DWE433',
          'MKA432',
          'SKO442',
          'MMO444',
          'EET431',
          'SGO430',
          'APU445',
          'FEB316',
          'CED438',
          'MHE428',
          'ETI427',
          'MKO429',
          'DWE426',
          'LHO425',
          'LKO424',
          'LTA422',
          'PFL357',
          'MMC421',
          'KRI420',
          'ESK423',
          'JSM419',
          'JBE418',
          'LMA417',
          'JCO416',
          'BAC415',
          'BRI343',
          'CMO038',
          'LMA032',
          'SSC011',
          'TCR414',
          'KSL413',
          'CCA411',
          'NLI410',
          'ARO412',
          'MLM409',
          'KHA408',
          'AJO407',
          'NIN406',
          'LDO405',
          'TBE404',
          'MMB403',
          'AVH256',
          'ADU402',
          'JBE401',
          'SEM400',
          'HLA340',
          'MBI172',
          'SVD263',
          'TKE220',
          'KRO399',
          'KCU398',
          'JHO397',
          'BLA396',
          'DRO395',
          'CST213',
          'JYA393',
          'ACH392',
          'EFO391',
          'KMO334',
          'SLA390',
          'SF1058',
          'RJA387',
          'TMA386',
          'MVH385',
          'CMI384',
          'NGR383',
          'LMO382',
          'VBO273',
          'TPE381',
          'MBR380',
          'PWA379',
          'SKO378',
          'RWA377',
          'BPI376',
          'DJA375',
          'ASH374',
          'SES373',
          'MBU372',
          'TWO371',
          'MME370',
          'MSM369',
          'SBL255',
          'EGA283',
          'GZI368',
          'EBR367',
          'CCL364',
          'LFA363',
          'NSI362',
          'BKI361',
          'CGA360' ] },
          {
            name: 'Name',
            type: '',
            options: [],
            data:
            [ 'A. Lena Stewart',
            'A. Thomas Leonhard, Jr.',
            'Aaron Daste',
            'Aaron Jordan',
            'Adelaide Wisdom Benjamin',
            'Adena Boris',
            'Adria Kimbrough',
            'Adrienne Colella',
            'Aimee Eubanks Davis',
            'Aimee Quirk',
            'Al Hamaeui',
            'Al Herrera',
            'Alan Arnold',
            'Alan H. Philipson',
            'Albert Clark',
            'Albert H. Small Jr.',
            'Alden J. McDonald, Jr.',
            'Alex Beard',
            'Alex Gershanik',
            'Alex S. Lebow',
            'Alexandra Navarre-Davis',
            'Alexandra Stafford',
            'Alexis Berk',
            'Alexis Hocevar',
            'Alfred L. Groos',
            'Alice Kennedy',
            'Alison Stone',
            'Allan J. Melillo',
            'Allen Square',
            'Allison B. Randolph, III',
            'Allison H. Pena',
            'Allison Padilla-Goodman',
            'Allison Plyer',
            'Allison Tiller',
            'Alphonse Forestier',
            'Alphonse Smith',
            'Alton McRee',
            'Alva See',
            'Alvertha B. Penny',
            'Amanda Guma',
            'Amanda M. Frischhertz',
            'Amanda Mantle Winstead',
            'Amith Nagarajan',
            'Amy Ferguson',
            'Amy Knower',
            'Ana Gershanik',
            'Andre M. Rubenstein',
            'Andrea Chen',
            'Andreanecia Morris',
            'Andree K. Moss',
            'Andrew Kopplin',
            'Andrew Lee',
            'Andrew Rosenberg',
            'Andrew Wisdom',
            'André V. Hooper',
            'Anesta Taylor',
            'Angela Callais',
            'Angela Hill',
            'Angela O\'Byrne',
            'Angela Patterson',
            'Angele Davis',
            'Angele James',
            'Angele Young',
            'Angelo Kingvalsky',
            'Anita Schon',
            'Ann Duplessis',
            'Ann Marie Wilkins',
            'Anna Flynt Breaux',
            'Anna Tusa',
            'Anne E. Raymond',
            'Anne F. Redd',
            'Anne Grace',
            'Anne H. Candies',
            'Anne Morse',
            'Ansel Augustine',
            'Anthony Carter',
            'Anthony Love',
            'Anthony Recasner',
            'Anthony Wayne Richard',
            'Ariane Brennan',
            'Arnel Cosey, Ph.D.',
            'Arnold Baker',
            'Arnold Donald',
            'Arthur Busby',
            'Arthur Pulitzer',
            'Arthur W. Huguley, III',
            'Arthur Wisdom',
            'Asher Friend',
            'Ashley Heiprin',
            'Ashlyn Graves',
            'Ashton R. Hardy',
            'Ashton Ryan',
            'Aspen Steib',
            'Asuncion "Sunny" Hostin',
            'Audbrey Watson, Jr.',
            'August James',
            'August Krinke',
            'Ava Rogers',
            'B.B. St. Roman' ] },
            {
              name: 'Gender',
              type: '',
              options: [],
              data:
              [ 'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Unknown',
              'Female',
              'Male',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Female',
              'Female',
              'Male',
              'Male',
              'Male',
              'Female',
              'Unknown' ] },
              {
                name: 'Company',
                type: '',
                options: [],
                data:
                [ 'Fidelity Bank',
                '321-9-Inc',
                '',
                'Fidelity Bank',
                '',
                '',
                'Kullman Law Firm',
                'Tulane University',
                'Teach for America',
                'Jones Walker',
                'First Bank& Trust',
                'IPS Corp.',
                'Midsouth Realty Management, Inc.',
                '',
                '',
                'Southern Engineering Corporation',
                'Liberty Bank and Trust Company',
                'The Alex Beard Studio',
                'The Power Courses',
                'City of New Orleans',
                '',
                '',
                'Touro Synagogue',
                'Enterprise Holdings Inc.',
                'Sonesta',
                '',
                '',
                '',
                'PosiGen Solar Solutions',
                'ABR, III & Associates, LLC',
                'National Park Service',
                'Anti-Defamation League',
                'The Data Center',
                'The Berger Company',
                '',
                'Fidelity Bank',
                'Fidelity Bank',
                '',
                'Alvertha Penny and Associates, LLC',
                '',
                '',
                'Amanda Winstead Fine Art LLC',
                'Aptify Corporation',
                'Ferguson Freelance',
                'Peoples Health Network',
                'The Times Picayune',
                '',
                'Propeller: A Force for Social Innovation',
                'Providence Community Housing',
                '',
                'City Of New Orleans',
                'Jones Walker',
                'Howard Weil',
                'Crescent Capital Consulting',
                '',
                '',
                'Jefferson Parish',
                'WWL-TV',
                'Perez, APC',
                'UNITY of Greater New Orleans',
                'The Davis Kelley Group, LLC',
                'LCI',
                '',
                '',
                '',
                'Louisiana Federation for Children',
                'Wilkins Management, Inc.',
                '',
                'New Orleans Creole Cookery',
                '',
                '',
                '',
                '',
                '',
                'Archdiocese of New Orleans',
                'Downtown Development District',
                'SBPH',
                'Samuel J. Green Charter School',
                '',
                'Strategic Staffing Solutions',
                'Delgado Community College',
                'Baker Ready Mix Concrete & Building Materials',
                'Carnival Corporation',
                '',
                'ACP Designs',
                'Agman Louisiana, Inc',
                '',
                'Jones Walker LLP',
                'Stone Pigman Walter Wittman LLC',
                'Evans Graves Engineers',
                'Hardy, Carey, Chautin & Balkin, LLC',
                'First NBC Bank',
                'Marathon Petroleum Company',
                'CNN',
                '',
                '',
                '',
                'City of New Orleans',
                '' ] },
                {
                  name: 'Ethnicity',
                  type: '',
                  options: [],
                  data:
                  [ '',
                  '',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Caucasian',
                  'African-American',
                  'Caucasian',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  '',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'African-American',
                  '',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Caucasian',
                  'Unknown',
                  'African-American',
                  'Unknown',
                  'Unknown',
                  'Caucasian',
                  'Asian/Asian-American',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Asian/Asian-American',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'Unknown',
                  '',
                  'Caucasian',
                  'Hispanic',
                  'Unknown',
                  'Other',
                  'Unknown',
                  'Unknown',
                  '',
                  '',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  '',
                  'Caucasian',
                  'Caucasian',
                  '',
                  'Unknown',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'African-American',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'African-American',
                  'African-American',
                  '',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'Caucasian',
                  'African-American',
                  'Caucasian',
                  'Unknown',
                  'Caucasian',
                  'African-American',
                  'African-American',
                  'Unknown',
                  'Unknown',
                  'Unknown',
                  'Unknown',
                  'Unknown' ] } ]

      findDateAndText(array)
    })

    it('should detect which columns are Date/Time', function() {
      expect(array[0].type).to.equal('Date/Time');
    })

    it('should detect which columns are Text', function() {
      expect(array[2].type).to.equal('Text');
    })
  })
})
