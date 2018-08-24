package io.github.jennysihua.stockexchange.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import io.github.jennysihua.stockexchange.model.Stock;

public interface StockRepository extends CrudRepository<Stock, Long> {
    List<Stock> findAll();
}
