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
    /// ПрикрепКн.
    /// </summary>
    // *** Start programmer edit section *** (ПрикрепКн CustomAttributes)

    // *** End programmer edit section *** (ПрикрепКн CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПрикрепКнE", new string[] {
            "СпрПрепод as \'Фио Преподавателя\'",
            "СпрПрепод.Фио as \'Фио Преподавателя\'",
            "СпрПрепод.СпрДолжность.Наименование as \'Должность\'",
            "СпрПрепод.СпрДисциплина.Наименование as \'Дисциплина\'",
            "СпрПрепод.СпрГруппа.Назв as \'Группа\'"})]
    [AssociatedDetailViewAttribute("ПрикрепКнE", "БазДан", "БазДанE", true, "", "База студентов с прикрепленными книгами", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ПрикрепКнE", "СпрПрепод", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио Преподавателя")]
    [View("ПрикрепКнL", new string[] {
            "СпрПрепод.Фио as \'Фио преподавателя\'",
            "СпрПрепод.СпрДолжность.Наименование as \'Дожность\'",
            "СпрПрепод.СпрДисциплина.Наименование as \'Дисциплина\'",
            "СпрПрепод.СпрГруппа.Назв as \'Группа\'"})]
    public class ПрикрепКн : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private IIS.Kursovaya_Rabota_4.СпрПрепод fСпрПрепод;
        
        private IIS.Kursovaya_Rabota_4.DetailArrayOfБазДан fБазДан;
        
        // *** Start programmer edit section *** (ПрикрепКн CustomMembers)

        // *** End programmer edit section *** (ПрикрепКн CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ПрикрепКн.Дата CustomAttributes)

        // *** End programmer edit section *** (ПрикрепКн.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ПрикрепКн.Дата Get start)

                // *** End programmer edit section *** (ПрикрепКн.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ПрикрепКн.Дата Get end)

                // *** End programmer edit section *** (ПрикрепКн.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПрикрепКн.Дата Set start)

                // *** End programmer edit section *** (ПрикрепКн.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ПрикрепКн.Дата Set end)

                // *** End programmer edit section *** (ПрикрепКн.Дата Set end)
            }
        }
        
        /// <summary>
        /// ПрикрепКн.
        /// </summary>
        // *** Start programmer edit section *** (ПрикрепКн.СпрПрепод CustomAttributes)

        // *** End programmer edit section *** (ПрикрепКн.СпрПрепод CustomAttributes)
        [PropertyStorage(new string[] {
                "СпрПрепод"})]
        [NotNull()]
        public virtual IIS.Kursovaya_Rabota_4.СпрПрепод СпрПрепод
        {
            get
            {
                // *** Start programmer edit section *** (ПрикрепКн.СпрПрепод Get start)

                // *** End programmer edit section *** (ПрикрепКн.СпрПрепод Get start)
                IIS.Kursovaya_Rabota_4.СпрПрепод result = this.fСпрПрепод;
                // *** Start programmer edit section *** (ПрикрепКн.СпрПрепод Get end)

                // *** End programmer edit section *** (ПрикрепКн.СпрПрепод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПрикрепКн.СпрПрепод Set start)

                // *** End programmer edit section *** (ПрикрепКн.СпрПрепод Set start)
                this.fСпрПрепод = value;
                // *** Start programmer edit section *** (ПрикрепКн.СпрПрепод Set end)

                // *** End programmer edit section *** (ПрикрепКн.СпрПрепод Set end)
            }
        }
        
        /// <summary>
        /// ПрикрепКн.
        /// </summary>
        // *** Start programmer edit section *** (ПрикрепКн.БазДан CustomAttributes)

        // *** End programmer edit section *** (ПрикрепКн.БазДан CustomAttributes)
        public virtual IIS.Kursovaya_Rabota_4.DetailArrayOfБазДан БазДан
        {
            get
            {
                // *** Start programmer edit section *** (ПрикрепКн.БазДан Get start)

                // *** End programmer edit section *** (ПрикрепКн.БазДан Get start)
                if ((this.fБазДан == null))
                {
                    this.fБазДан = new IIS.Kursovaya_Rabota_4.DetailArrayOfБазДан(this);
                }
                IIS.Kursovaya_Rabota_4.DetailArrayOfБазДан result = this.fБазДан;
                // *** Start programmer edit section *** (ПрикрепКн.БазДан Get end)

                // *** End programmer edit section *** (ПрикрепКн.БазДан Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПрикрепКн.БазДан Set start)

                // *** End programmer edit section *** (ПрикрепКн.БазДан Set start)
                this.fБазДан = value;
                // *** Start programmer edit section *** (ПрикрепКн.БазДан Set end)

                // *** End programmer edit section *** (ПрикрепКн.БазДан Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПрикрепКнE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрикрепКнE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрикрепКнE", typeof(IIS.Kursovaya_Rabota_4.ПрикрепКн));
                }
            }
            
            /// <summary>
            /// "ПрикрепКнL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрикрепКнL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрикрепКнL", typeof(IIS.Kursovaya_Rabota_4.ПрикрепКн));
                }
            }
        }
    }
}
