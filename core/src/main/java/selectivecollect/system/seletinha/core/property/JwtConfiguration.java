package selectivecollect.system.seletinha.core.property;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "jwt.config")
@Getter
@Setter
public class JwtConfiguration {

    private String loginUrl = "/login/**";

    @NestedConfigurationProperty
    private Header header = new Header();

    private String privateKey = "QWky587G7iwscfOPGwZ09p384u8mDXZ0";
    private String type = "encrypted";

    @Setter
    @Getter
    public static class Header {
        private String name = "Authorization";
        private String prefix = "Bearer ";
    }

}
