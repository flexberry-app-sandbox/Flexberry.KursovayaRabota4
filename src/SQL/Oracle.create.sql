



CREATE TABLE "СпрСтуд"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"СпрГруппа" RAW(16) NOT NULL,

	"СпрДисциплина" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрПрепод"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"СпрГруппа" RAW(16) NOT NULL,

	"СпрДисциплина" RAW(16) NOT NULL,

	"СпрДолжность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрДисциплина"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрДолжность"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПрикрепКн"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"СпрПрепод" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрГруппа"
(

	"primaryKey" RAW(16) NOT NULL,

	"Назв" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрМатериалы"
(

	"primaryKey" RAW(16) NOT NULL,

	"Вид" NVARCHAR2(13) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"СпрДисциплина" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СпрСтуд"
	ADD CONSTRAINT "СпрСтуд_FСпрГ_4655" FOREIGN KEY ("СпрГруппа") REFERENCES "СпрГруппа" ("primaryKey");

CREATE INDEX "СпрСтуд_IСпрГ_1672" on "СпрСтуд" ("СпрГруппа");

ALTER TABLE "СпрСтуд"
	ADD CONSTRAINT "СпрСтуд_FСпрД_7375" FOREIGN KEY ("СпрДисциплина") REFERENCES "СпрДисциплина" ("primaryKey");

CREATE INDEX "СпрСтуд_IСпрДи_577" on "СпрСтуд" ("СпрДисциплина");

ALTER TABLE "СпрПрепод"
	ADD CONSTRAINT "СпрПрепод_FСп_9939" FOREIGN KEY ("СпрГруппа") REFERENCES "СпрГруппа" ("primaryKey");

CREATE INDEX "СпрПрепод_IСп_3713" on "СпрПрепод" ("СпрГруппа");

ALTER TABLE "СпрПрепод"
	ADD CONSTRAINT "СпрПрепод_FСп_5917" FOREIGN KEY ("СпрДисциплина") REFERENCES "СпрДисциплина" ("primaryKey");

CREATE INDEX "СпрПрепод_IСп_1313" on "СпрПрепод" ("СпрДисциплина");

ALTER TABLE "СпрПрепод"
	ADD CONSTRAINT "СпрПрепод_FСп_4659" FOREIGN KEY ("СпрДолжность") REFERENCES "СпрДолжность" ("primaryKey");

CREATE INDEX "СпрПрепод_IСп_5184" on "СпрПрепод" ("СпрДолжность");

ALTER TABLE "ПрикрепКн"
	ADD CONSTRAINT "ПрикрепКн_FСп_8417" FOREIGN KEY ("СпрПрепод") REFERENCES "СпрПрепод" ("primaryKey");

CREATE INDEX "ПрикрепКн_IСп_1379" on "ПрикрепКн" ("СпрПрепод");

ALTER TABLE "СпрМатериалы"
	ADD CONSTRAINT "СпрМатериалы__3825" FOREIGN KEY ("СпрДисциплина") REFERENCES "СпрДисциплина" ("primaryKey");

CREATE INDEX "СпрМатериалы__4785" on "СпрМатериалы" ("СпрДисциплина");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


