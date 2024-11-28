import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transactions')  
export class Transaction {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')  
  dateTime: Date;

  @Column()
  author: string;

  @Column('decimal', { precision: 10, scale: 2 }) 
  sum: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  comment: string;
}