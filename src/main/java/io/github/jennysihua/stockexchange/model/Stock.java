package io.github.jennysihua.stockexchange.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    String ticker;

    @NotNull
    String company;

    @NotNull
    double purchasePrice;

    @NotNull
    java.util.Date purchaseDate;

    @NotNull
    float shares;
}
