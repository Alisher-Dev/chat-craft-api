import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dbConfig } from "./config/db.config";
import { AuthModule } from "./modules/auth/auth.module";
import { ChatModule } from "./modules/chat/chat.module";

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), AuthModule, ChatModule],
})
export class AppModule {}
