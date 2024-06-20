/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DoctorPersonalDataWhereInput } from "./DoctorPersonalDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DoctorPersonalDataOrderByInput } from "./DoctorPersonalDataOrderByInput";

@ArgsType()
class DoctorPersonalDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DoctorPersonalDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DoctorPersonalDataWhereInput, { nullable: true })
  @Type(() => DoctorPersonalDataWhereInput)
  where?: DoctorPersonalDataWhereInput;

  @ApiProperty({
    required: false,
    type: [DoctorPersonalDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DoctorPersonalDataOrderByInput], { nullable: true })
  @Type(() => DoctorPersonalDataOrderByInput)
  orderBy?: Array<DoctorPersonalDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DoctorPersonalDataFindManyArgs as DoctorPersonalDataFindManyArgs };
