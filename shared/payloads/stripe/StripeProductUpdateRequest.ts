import StripeProductPackageDimensionsPayload from "./StripeProductPackageDimensionsPayload";
import { IsOptional, IsString, IsBoolean, IsObject, IsArray, MaxLength } from "class-validator";

/**
 * Stripe Product Update Request
 * 
 * @param active boolean  Optional. Whether the product is available for purchase.
 * @param description string  Optional. The product’s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
 * @param metadata object  Optional. Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
 * @param name string  Optional. The product’s name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
 * @param images array  Optional. A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
 * @param package_dimensions StripeProductPackageDimensionsPayload  Optional. 
 * @param shippable boolean  Optional. Whether this product is shipped (i.e., physical goods).
 * @param statement_descriptor string  Optional. An arbitrary string to be displayed on your customer’s credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all. This may be up to 22 characters. The statement description may not include <, >, \, ", ’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. It must contain at least one letter. May only be set if type=service.
 * @param tax_code string  Optional. A tax code ID.
 * @param unit_label string  Optional. A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if type=service.
 * @param url string  Optional. A URL of a publicly-accessible webpage for this product.
 */
export default class StripeProductUpdateRequest implements BodyRequest {
  @IsOptional()
  @IsBoolean()
  active: boolean;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsObject()
  metadata: {};
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsArray()
  @MaxLength(8, { each: true })
  images: string[];
  @IsOptional()
  package_dimensions: StripeProductPackageDimensionsPayload;
  @IsOptional()
  @IsBoolean()
  shippable: boolean;
  @IsOptional()
  @IsString()
  statement_descriptor: string;
  @IsOptional()
  @IsString()
  tax_code: string;
  @IsOptional()
  @IsString()
  unit_label: string;
  @IsOptional()
  @IsString()
  url: string;
}