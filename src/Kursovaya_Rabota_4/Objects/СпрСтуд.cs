﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_Rabota_4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Спр студ.
    /// </summary>
    // *** Start programmer edit section *** (СпрСтуд CustomAttributes)

    // *** End programmer edit section *** (СпрСтуд CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник студенты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СпрСтудE", new string[] {
            "Фио as \'Фио студента\'",
            "СпрГруппа as \'Группа\'",
            "СпрГруппа.Назв as \'Группа\'",
            "СпрДисциплина as \'Дисциплина\'",
            "СпрДисциплина.Наименование as \'Дисциплина\'"})]
    [View("СпрСтудL", new string[] {
            "Фио as \'Фио студента\'"})]
    public class СпрСтуд : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        private IIS.Kursovaya_Rabota_4.СпрДисциплина fСпрДисциплина;
        
        private IIS.Kursovaya_Rabota_4.СпрГруппа fСпрГруппа;
        
        // *** Start programmer edit section *** (СпрСтуд CustomMembers)

        // *** End programmer edit section *** (СпрСтуд CustomMembers)

        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СпрСтуд.Фио CustomAttributes)

        // *** End programmer edit section *** (СпрСтуд.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СпрСтуд.Фио Get start)

                // *** End programmer edit section *** (СпрСтуд.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СпрСтуд.Фио Get end)

                // *** End programmer edit section *** (СпрСтуд.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрСтуд.Фио Set start)

                // *** End programmer edit section *** (СпрСтуд.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СпрСтуд.Фио Set end)

                // *** End programmer edit section *** (СпрСтуд.Фио Set end)
            }
        }
        
        /// <summary>
        /// Спр студ.
        /// </summary>
        // *** Start programmer edit section *** (СпрСтуд.СпрГруппа CustomAttributes)

        // *** End programmer edit section *** (СпрСтуд.СпрГруппа CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрГруппа"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Rabota_4.СпрГруппа СпрГруппа
        {
            get
            {
                // *** Start programmer edit section *** (СпрСтуд.СпрГруппа Get start)

                // *** End programmer edit section *** (СпрСтуд.СпрГруппа Get start)
                IIS.Kursovaya_Rabota_4.СпрГруппа result = this.fСпрГруппа;
                // *** Start programmer edit section *** (СпрСтуд.СпрГруппа Get end)

                // *** End programmer edit section *** (СпрСтуд.СпрГруппа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрСтуд.СпрГруппа Set start)

                // *** End programmer edit section *** (СпрСтуд.СпрГруппа Set start)
                this.fСпрГруппа = value;
                // *** Start programmer edit section *** (СпрСтуд.СпрГруппа Set end)

                // *** End programmer edit section *** (СпрСтуд.СпрГруппа Set end)
            }
        }
        
        /// <summary>
        /// Спр студ.
        /// </summary>
        // *** Start programmer edit section *** (СпрСтуд.СпрДисциплина CustomAttributes)

        // *** End programmer edit section *** (СпрСтуд.СпрДисциплина CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрДисциплина"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Rabota_4.СпрДисциплина СпрДисциплина
        {
            get
            {
                // *** Start programmer edit section *** (СпрСтуд.СпрДисциплина Get start)

                // *** End programmer edit section *** (СпрСтуд.СпрДисциплина Get start)
                IIS.Kursovaya_Rabota_4.СпрДисциплина result = this.fСпрДисциплина;
                // *** Start programmer edit section *** (СпрСтуд.СпрДисциплина Get end)

                // *** End programmer edit section *** (СпрСтуд.СпрДисциплина Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрСтуд.СпрДисциплина Set start)

                // *** End programmer edit section *** (СпрСтуд.СпрДисциплина Set start)
                this.fСпрДисциплина = value;
                // *** Start programmer edit section *** (СпрСтуд.СпрДисциплина Set end)

                // *** End programmer edit section *** (СпрСтуд.СпрДисциплина Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СпрСтудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрСтудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрСтудE", typeof(IIS.Kursovaya_Rabota_4.СпрСтуд));
                }
            }
            
            /// <summary>
            /// "СпрСтудL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрСтудL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрСтудL", typeof(IIS.Kursovaya_Rabota_4.СпрСтуд));
                }
            }
        }
    }
}
