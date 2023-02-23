package entity;

import lombok.*;

@Setter
@Getter
@ToString
public class Employee {
    private Long id;
    private String name;
    private String email;
    private String phone;
}
