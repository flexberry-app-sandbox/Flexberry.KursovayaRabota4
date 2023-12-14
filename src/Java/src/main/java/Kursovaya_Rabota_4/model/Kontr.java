package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Контр
 */
@Entity(name = "IISKursovaya_Rabota_4Контр")
@Table(schema = "public", name = "Контр")
public class Kontr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "Просмотр")
    private Boolean просмотр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprStud")
    @Convert("SprStud")
    @Column(name = "СпрСтуд", length = 16, unique = true, nullable = false)
    private UUID _sprstudid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprStud", insertable = false, updatable = false)
    private SprStud sprstud;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Stat")
    @Convert("Stat")
    @Column(name = "Стат", length = 16, unique = true, nullable = false)
    private UUID _statid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Stat", insertable = false, updatable = false)
    private Stat stat;


    public Kontr() {
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

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public Boolean getПросмотр() {
      return просмотр;
    }

    public void setПросмотр(Boolean просмотр) {
      this.просмотр = просмотр;
    }


}