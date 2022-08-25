import { Entity } from "../../core/domain/Entity";

type ChallangeProps = {
  title: string;
  instructionsUrl: string;
};

export class Challange extends Entity<ChallangeProps> {
  private constructor(props: ChallangeProps, id?: string) {
    super(props, id);
  }

  static create(props: ChallangeProps, id?: string) {
    const challange = new Challange(props, id);

    return challange;
  }
}
