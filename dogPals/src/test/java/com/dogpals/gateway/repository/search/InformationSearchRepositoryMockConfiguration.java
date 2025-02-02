package com.dogpals.gateway.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of {@link InformationSearchRepository} to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class InformationSearchRepositoryMockConfiguration {

    @MockBean
    private InformationSearchRepository mockInformationSearchRepository;

}
