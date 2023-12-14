package Kursovaya_Rabota_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya_Rabota_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СпрСтуд
 */
@Entity(name = "IISKursovaya_Rabota_4СпрСтуд")
@Table(schema = "public", name = "СпрСтуд")
public class SprStud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фио")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprDisciplina")
    @Convert("SprDisciplina")
    @Column(name = "СпрДисциплина", length = 16, unique = true, nullable = false)
    private UUID _sprdisciplinaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprDisciplina", insertable = false, updatable = false)
    private SprDisciplina sprdisciplina;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SprGruppa")
    @Convert("SprGruppa")
    @Column(name = "СпрГруппа", length = 16, unique = true, nullable = false)
    private UUID _sprgruppaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SprGruppa", insertable = false, updatable = false)
    private SprGruppa sprgruppa;


    public SprStud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФио() {
      return фио;
    }

    public void setФио(String фио) {
      this.фио = фио;
    }


}