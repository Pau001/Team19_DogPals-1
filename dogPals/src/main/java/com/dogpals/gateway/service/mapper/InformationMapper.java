package com.dogpals.gateway.service.mapper;


import com.dogpals.gateway.domain.*;
import com.dogpals.gateway.service.dto.InformationDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Information} and its DTO {@link InformationDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface InformationMapper extends EntityMapper<InformationDTO, Information> {



    default Information fromId(Long id) {
        if (id == null) {
            return null;
        }
        Information information = new Information();
        information.setId(id);
        return information;
    }
}
