package com.devmate.backend.alarm;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="alarm", schema = "public")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Alarm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="ticker")
    @NotNull
    private String ticker;

    @Column(name="change")
    @NotNull
    private float change;


}
