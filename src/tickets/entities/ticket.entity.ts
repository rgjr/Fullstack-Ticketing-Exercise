import { Ticket } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TicketEntity implements Ticket {
  @ApiProperty()
  id: number;

  @ApiProperty()
  customerName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  notes: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
