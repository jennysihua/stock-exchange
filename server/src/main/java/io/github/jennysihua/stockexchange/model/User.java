package io.github.jennysihua.stockexchange.model;

import lombok.Data;
import java.util.Date;
import javax.persistence.*;

import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.validation.constraints.NotNull;

import java.util.List;
import org.hibernate.annotations.OnDelete;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)

@Table(name="\"User\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    private String email;

    @Column(name="created_at", nullable = false, updatable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name="updated_at", nullable = false)
    @LastModifiedDate
    private Date updatedAt;

//    @OneToMany(fetch = FetchType.EAGER, mappedBy = "parent")
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    private List<Stock> children;
}
