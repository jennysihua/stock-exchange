package io.github.jennysihua.stockexchange.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.github.jennysihua.stockexchange.repository.StockRepository;
import io.github.jennysihua.stockexchange.model.Stock;
import java.util.List;
import javax.validation.Valid;

@RestController
@RequestMapping("/")
public class StockController {
    @Autowired
    private StockRepository stockRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Stock> getStocks() {
        return stockRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Stock createStock(@Valid @RequestBody Stock stock) {
        return stockRepository.save(stock);
    }
}
