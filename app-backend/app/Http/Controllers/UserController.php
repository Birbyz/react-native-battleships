<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->input('registerData');

        if (User::where('email', strtolower($request->email))->exists()) {
            return Response::json(['message' => 'This email has already been taken'], 404);
        }
        
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'username' => $data['username'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        if (!$user->save()) {
            return Response::json(['message' => 'Unable to save user']);
        }

        // create token
        $token = $user->createToken('login');

        return Response::json(['user' => $user, 'token' => $token]);
    }
}
