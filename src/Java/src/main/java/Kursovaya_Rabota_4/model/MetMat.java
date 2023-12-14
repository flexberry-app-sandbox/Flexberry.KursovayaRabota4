package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: МетМат
 */
@Entity(name = "IISKursovaya_Rabota_4МетМат")
@Table(schema = "public", name = "МетМат")
public class MetMat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprMaterialy")
    @Convert("SprMaterialy")
    @Column(name = "СпрМатериалы", length = 16, unique = true, nullable = false)
    private UUID _sprmaterialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprMaterialy", insertable = false, updatable = false)
    private SprMaterialy sprmaterialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Prosmotr")
    @Convert("Prosmotr")
    @Column(name = "Просмотр", length = 16, unique = true, nullable = false)
    private UUID _prosmotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Prosmotr", insertable = false, updatable = false)
    private Prosmotr prosmotr;


    public MetMat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}