provider "aws" {
  region = "eu-central-1"
}

provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
}

locals {
  name        = "${var.prefix}-${terraform.workspace}"
  domain_root = "datelazi.ro"

  subdomains_frontend = [
    "www.${local.domain_root}",                   # PROD
    "staging.${local.domain_root}",               # STAGING
    "${terraform.workspace}.${local.domain_root}" # DEV
  ]
  subdomains_api = [
    "api1.${local.domain_root}",                      # PROD
    "staging-api.${local.domain_root}",               # STAGING
    "${terraform.workspace}-api.${local.domain_root}" # DEV
  ]

  domain_frontend = "${terraform.workspace == "production" ? local.subdomains_frontend[0]
  : terraform.workspace == "staging" ? local.subdomains_frontend[1] : local.subdomains_frontend[2]}"

  domain_api = "${terraform.workspace == "production" ? local.subdomains_api[0]
  : terraform.workspace == "staging" ? local.subdomains_api[1] : local.subdomains_api[2]}"
}

terraform {
  required_version = ">=0.12.24"
  backend "s3" {
    bucket         = "code4ro-terraform-tfstate"
    key            = "date-la-zi/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
