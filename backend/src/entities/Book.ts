import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    cost!: string;

    @Column()
    discount!: string;

    @Column()
    discription!: string;

    @Column()
    editions!: string;

    @Column()
    amount!: Date;

    @Column()
    saler_amount!: Date;
}
