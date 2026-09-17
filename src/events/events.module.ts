import { Module } from '@nestjs/common';
import { RabbitmqService } from './habbitmq/habbitmq.service';
import { ConfigModule } from '@nestjs/config';
import { PaymentQueueService } from './payment-queue/payment-queue.service';
import { PaymentConsumerService } from './payment-consumer/payment-consumer.service';
import { DlqController } from './dlq/dlq.controller';
import { DlqService } from './dlq/dlq.service';
import { MetricsController } from './metrics/metrics.controller';
import { MetricsService } from './metrics/metrics.service';

@Module({
  imports: [ConfigModule],
  providers: [RabbitmqService, PaymentQueueService, PaymentConsumerService, DlqService, MetricsService],
  controllers: [DlqController, MetricsController]
})
export class EventsModule {}
