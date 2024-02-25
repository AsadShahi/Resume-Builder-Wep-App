<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class coversample extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        if (request()->isMethod('post')) {
            return [
                'title' => 'required|string|max:100',
                'image' => 'required|image'
            ];
        } else {
            return [
                'title' => 'required|string|max:100',
                'image' => 'required|image'
            ];

    }
}
}
