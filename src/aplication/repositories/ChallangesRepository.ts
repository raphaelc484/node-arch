import { Challange } from "../../domain/entities/challenge";

export interface ChallangesRepository {
  findById(id: string): Promise<Challange | null>;
}
