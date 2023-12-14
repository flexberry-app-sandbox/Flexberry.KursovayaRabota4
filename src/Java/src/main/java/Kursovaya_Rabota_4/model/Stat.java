package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Стат
 */
@Entity(name = "IISKursovaya_Rabota_4Стат")
@Table(schema = "public", name = "Стат")
public class Stat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprPrepod")
    @Convert("SprPrepod")
    @Column(name = "СпрПрепод", length = 16, unique = true, nullable = false)
    private UUID _sprprepodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprPrepod", insertable = false, updatable = false)
    private SprPrepod sprprepod;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprStud")
    @Convert("SprStud")
    @Column(name = "СпрСтуд", length = 16, unique = true, nullable = false)
    private UUID _sprstudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprStud", insertable = false, updatable = false)
    private SprStud sprstud;


    public Stat() {
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