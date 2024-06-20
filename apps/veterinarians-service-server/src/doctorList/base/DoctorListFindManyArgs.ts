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
import { DoctorListWhereInput } from "./DoctorListWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DoctorListOrderByInput } from "./DoctorListOrderByInput";

@ArgsType()
class DoctorListFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DoctorListWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DoctorListWhereInput, { nullable: true })
  @Type(() => DoctorListWhereInput)
  where?: DoctorListWhereInput;

  @ApiProperty({
    required: false,
    type: [DoctorListOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DoctorListOrderByInput], { nullable: true })
  @Type(() => DoctorListOrderByInput)
  orderBy?: Array<DoctorListOrderByInput>;

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

export { DoctorListFindManyArgs as DoctorListFindManyArgs };