variable "resource_group_name" {
  default = "rg-taskapp-tf"
}

variable "location" {
  default = "Central India"
}

variable "acr_name" {
  description = "Must be globally unique, lowercase, no hyphens"
  default     = "acrtaskapprayan"
}