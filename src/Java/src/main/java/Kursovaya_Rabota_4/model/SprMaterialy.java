package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СпрМатериалы
 */
@Entity(name = "IISKursovaya_Rabota_4СпрМатериалы")
@Table(schema = "public", name = "СпрМатериалы")
public class SprMaterialy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Вид")
    private String вид;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprDisciplina")
    @Convert("SprDisciplina")
    @Column(name = "СпрДисциплина", length = 16, unique = true, nullable = false)
    private UUID _sprdisciplinaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprDisciplina", insertable = false, updatable = false)
    private SprDisciplina sprdisciplina;


    public SprMaterialy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getВид() {
      return вид;
    }

    public void setВид(String вид) {
      this.вид = вид;
    }


}