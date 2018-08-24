package io.github.jennysihua.stockexchange;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

//@EnableWebMvc
@SpringBootApplication
@EnableJpaAuditing
public class StockExchangeApplication {
	public static void main(String[] args) {
	    SpringApplication.run(StockExchangeApplication.class, args);
	}
}
