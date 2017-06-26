HumHub - Translation Module
===========================

Base module forked form https://github.com/humhub/humhub-modules-translation.git 

Know issues with the module:
---------------------------
 - When changing selection of Module, Languages, and Files, it comes to a pint where files are not properly updated or are not updated at all.
 - On windows server you need to add write permission (IS) to messages folders on some modules so changes can be save.


**This module is under development yet - do not use on production systems!**


Installation:
------------

- Install 
  - Download & Put files into /protected/modules/translation/
  - Or: git submodule add https://github.com/humhub/humhub-modules-translation.git protected/modules/translation

- Enable it unter Admin -> Modules
- Access by clicking on Translation button at same menu than “My Spaces”.


Description:
------------

The module adds 3 helpers:

1. Color background of modules and files based on % translation (0% = red, 99% = green and 100% = NO color)

   1. This helps to find not translated files and modules
   
   2. Also helps to quick see translation status.

![Screenshoot Colors](/docs/screenshoot_00.png)


2. Adds an automatic translations (Free from Google, no API KEY needed *) as a suggestions (does NO change anything)

   1. Allows to copy each suggested translation individually
   
   2. Allows to copy all suggested translations to empty ones (to speed up translation)

![Screenshoot Copy](/docs/screenshoot_01.png)


   3. Automatic translation tries to preserve html tags, Yii Markup (“{0,plura}”,”%variable%”), and old translations (“@this is an old text that does not need to be translated@”)


   4. Adds a logo to the module (yes, yes, yes... I know is really similar to Google translations... :)

![Module Logo](/assets/module_image.png)



Know issues with the helpers modifications:
------------------------------------------

 - Needs testing

 - *Free translation Google based on loophole... (Hope it last few more years)
 THANKS To Adrián Barrio Andrés and his https://github.com/statickidz/php-google-translate-free
