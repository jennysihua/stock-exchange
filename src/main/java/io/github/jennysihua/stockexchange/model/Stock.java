package io.github.jennysihua.stockexchange.model;

import lombok.Data;
import javax.persistence.*;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)

public class Stock {
    public Stock() {
        ticker = "BABA";
        company = "Alibaba";
        purchasePrice = 170.70;
        shares = 30;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    String ticker;

    @NotNull
    String company;

    @NotNull
    double purchasePrice;

    @NotNull
    float shares;

    @Column(name="created_at", nullable = false, updatable = false)
    @CreatedDate
    private Date createdAt;

    @Column(name="updated_at", nullable = false)
    @LastModifiedDate
    private Date updatedAt;
}
