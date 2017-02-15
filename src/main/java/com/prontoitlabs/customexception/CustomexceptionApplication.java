package com.prontoitlabs.customexception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.client.RestTemplate;

import com.prontoitlabs.customexception.controller.UserController;

@SpringBootApplication
@EnableMongoAuditing
@EnableAsync
public class CustomexceptionApplication extends SpringBootServletInitializer {

  private static final Logger LOGGER = LoggerFactory.getLogger(CustomexceptionApplication.class);

    public static void main(String[] args) {
       LOGGER.info("loggly logs... ");
       System.out.println("inside main");
        SpringApplication.run(applicationClass, args);
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(applicationClass);
    }
    
    private static Class<CustomexceptionApplication> applicationClass = CustomexceptionApplication.class;
    
    @Bean
    public RestTemplate restTemplate() {
      return new RestTemplate();
    }
}
