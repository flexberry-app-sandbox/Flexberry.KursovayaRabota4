package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПрикрепКн
 */
@Entity(name = "IISKursovaya_Rabota_4ПрикрепКн")
@Table(schema = "public", name = "ПрикрепКн")
public class PrikrepKn {

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

    @OneToMany(mappedBy = "prikrepkn", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<BazDan> bazdans;


    public PrikrepKn() {
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